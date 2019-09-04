import React from 'react'
import 'react-big-calendar/lib/css/react-big-calendar.css'
import styleFix from './calendarFix.css'

import { Calendar , momentLocalizer } from 'react-big-calendar'

import moment from 'moment'
import Modal from '@material-ui/core/Modal';
import { connect } from 'react-redux'


const localizer = momentLocalizer(moment)

const calStyle = {
    height : '750px'
}

const modalStyle = {
    display : 'flex',
    alignItems : 'center',
    justifyContent : 'center',
}

const modalDivStyle = {
    width : '500px',
    height : '300px',
    backgroundColor : 'white'
}

const modalHeaderStyle ={
    marginLeft : '10px'
}

// TODO: For this to work it is super important that the css is overridden, figure out a way to do so before deploying
// I think the fix I have now should work. Let's see
class GiveCalendar extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            showModal : false,
            selectedEvent : ''
        }
    }

    toggleModal = event => {
        console.log(event)
        if(!this.state.showModal) {
            this.setState({
                showModal : !this.state.showModal
            })
        }
    }

    displayModal = event => {
        this.setState({showModal : true, selectedEvent : event})
    }

    hideModal = event => {
        this.setState({showModal : false, selectedEvent : ''})
    }

    render() {

        return(
            <div className= {styleFix.rbcEvent}>
                <Calendar
                    style={calStyle}
                    popup
                    localizer={localizer}
                    views={{month:true, week : true, day : true}}
                    events={this.props.events}
                    defaultDate={new Date(2019, 9, 1)}
                    onSelectEvent={this.displayModal}
                    startAccessor= "start"
                    endAccessor ="end"
                />
                <Modal open={this.state.showModal} onClose={this.hideModal} style={modalStyle}>
                    <div style={modalDivStyle}>
                        <div>
                        <h2 style= {modalHeaderStyle}>{this.state.selectedEvent.title}</h2>
                        </div>

                        <div>
                            <p style={modalHeaderStyle}>
                                <strong>Start Time : </strong> {new Intl.DateTimeFormat('en-US', {year : 'numeric', month : '2-digit', day : '2-digit', hour : '2-digit', minute : '2-digit'}).format(this.state.selectedEvent.start)}
                                <br />
                                <strong>End Time : </strong> {new Intl.DateTimeFormat('en-US', {year : 'numeric', month : '2-digit', day : '2-digit', hour : '2-digit', minute : '2-digit'}).format(this.state.selectedEvent.end)}
                                <br />
                                <br />
                                <strong>Contact : </strong> {this.state.selectedEvent.contact}
                                <br/>
                                <br />
                                <strong>Location : </strong> Building {this.state.selectedEvent.building} , {this.state.selectedEvent.city} {this.state.selectedEvent.state}
                            </p>
                        </div>

                        <div>
                            <button style={modalHeaderStyle}>Edit Event</button>
                            <button style={modalHeaderStyle}> Delete Event</button>

                        </div>
                    </div>
                </Modal>
            </div>
        )
    }
}
// Connect the redux store to react
function mapStateToProps(state) {
    return {
      events : state.events
    };
}

export default connect(
mapStateToProps,
null
)(GiveCalendar);