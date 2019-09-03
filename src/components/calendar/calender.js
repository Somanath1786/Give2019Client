import React from 'react'
import 'react-big-calendar/lib/css/react-big-calendar.css'
import styleFix from './calendarFix.css'

import { Calendar , momentLocalizer } from 'react-big-calendar'

import moment from 'moment'
import Modal from '@material-ui/core/Modal';


const localizer = momentLocalizer(moment)

const events = [
    {
        'title' : 'Test 1',
        'start' : new Date(2019, 9, 4, 12, 0, 0),
        'end' : new Date(2019, 9, 4, 13, 0, 0)
    },
    {
        'title' : 'Test 2',
        'start' : new Date(2019, 9, 5, 12, 0, 0),
        'end' : new Date(2019, 9, 5, 13, 0, 0)
    },
    {
        'title' : 'Test 3',
        'start' : new Date(2019, 9, 6, 12, 0, 0),
        'end' : new Date(2019, 9, 6, 13, 0, 0)
    },
    {
        'title' : 'Test 3a',
        'start' : new Date(2019, 9, 6, 12, 0, 0),
        'end' : new Date(2019, 9, 6, 13, 0, 0)
    },
    {
        'title' : 'Test 3b',
        'start' : new Date(2019, 9, 6, 12, 0, 0),
        'end' : new Date(2019, 9, 6, 13, 0, 0)
    },
    {
        'title' : 'Test 3c',
        'start' : new Date(2019, 9, 6, 12, 0, 0),
        'end' : new Date(2019, 9, 6, 13, 0, 0)
    },
    {
        'title' : 'Test 3d',
        'start' : new Date(2019, 9, 6, 12, 0, 0),
        'end' : new Date(2019, 9, 6, 13, 0, 0)
    },
    {
        'title' : 'Test 3e',
        'start' : new Date(2019, 9, 6, 12, 0, 0),
        'end' : new Date(2019, 9, 6, 13, 0, 0)
    }
]

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
    height : '600px',
    backgroundColor : 'white'
}

const modalHeaderStyle ={
    display : 'flex',
    alignItems : 'center',
    justifyContent : 'center',
}

// TODO: For this to work it is super important that the css is overridden, figure out a way to do so before deploying
// I think the fix I have now should work. Let's see
export default class GiveCalendar extends React.Component {
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
            <div class= {styleFix.rbcEvent}>
                <Calendar
                    style={calStyle}
                    popup
                    localizer={localizer}
                    views={{month:true, week : true, day : true}}
                    events={events}
                    defaultDate={new Date(2019, 9, 1)}
                    onSelectEvent={this.displayModal}
                />
                <Modal open={this.state.showModal} onClose={this.hideModal} style={modalStyle}>
                    <div style={modalDivStyle}>
                        <h2 style= {modalHeaderStyle}>{this.state.selectedEvent.title}</h2>
                    </div>
                </Modal>
            </div>
        )
    }
}