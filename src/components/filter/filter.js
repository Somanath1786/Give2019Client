import React from 'react'
import * as events from '../../api/events'
import {updateEvents} from '../../components/store/store'
import { connect } from 'react-redux'

const divStyle = {
    display : 'flex',
    flexDirection : 'row',
    width : '100%'
}
const leftAlign = {
    width :'30%',
    marginTop : '5px',
    marginBottom : '5px',
    marginLeft : '5px'

}
const rightAlign = {
    width : '70%',
    marginTop : '5px',
    marginBottom : '5px',
    marginRight : '5px'
}

class FilterEvents extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            event_type : '',
            building : '',
            city : '',
            state : '',
            slt_leader : '',
            leader : '',
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.clearFilter = this.clearFilter.bind(this)
    }

    handleChange({target : { name, value }}) {
        this.setState({[name] : value})
    }

    async handleSubmit (e) {
        e.preventDefault()
        var query;

        // TODO: Instead of checking individually for each item in a state
        // iterate over the same

        if (this.state.event_type !== '')
        {
            if (query === undefined)
            {
                query = `event_type=${this.state.event_type}`
            }
            else
            {
                query = query + `&&event_type=${this.state.event_type}`
            }
        }

        if (this.state.building !== '')
        {
            if (query === undefined)
            {
                query = `building=${this.state.building}`
            }
            else
            {
                query = query + `&&building=${this.state.building}`
            }
        }

        if (this.state.city !== '')
        {
            if (query === undefined)
            {
                query = `city=${this.state.city}`
            }
            else
            {
                query = query + `&&city=${this.state.city}`
            }
        }

        if (this.state.state !== '')
        {
            if (query === undefined)
            {
                query = `state=${this.state.state}`
            }
            else
            {
                query = query + `&&state=${this.state.state}`
            }
        }

        if (this.state.slt_leader !== '')
        {
            if (query === undefined)
            {
                query = `slt_leader=${this.state.slt_leader}`
            }
            else
            {
                query = query + `&&slt_leader=${this.state.slt_leader}`
            }
        }

        if (this.state.leader !== '')
        {
            if (query === undefined)
            {
                query = `leader=${this.state.leader}`
            }
            else
            {
                query = query + `&&leader=${this.state.leader}`
            }
        }

        const filteredEvents = await events.getEvents(query)
        this.props.dispatch(updateEvents(filteredEvents.response))
    }

    clearFilter ()
    {
        this.setState({
            event_type : '',
            building : '',
            city : '',
            state : '',
            slt_leader : '',
            leader : '',
        })
    }

    render() {
        return(
            <div>
                <form onSubmit={this.handleSubmit} >
                    <h2> Filter Events</h2>
                    <div>
                        <div style={divStyle}>
                        <label htmlFor='eventType' style = {leftAlign}>Event Type : </label>
                        <select
                            className='form-control'
                            id='event_type'
                            onChange={this.handleChange}
                            name='event_type'
                            value={this.state.event_type}
                            style={rightAlign}
                        >
                            <option value=''></option>
                            <option>FundRaising</option>
                            <option>MicroVolunteering</option>
                        </select>
                        </div>

                        <br / >

                        <div style={divStyle}>
                        <label htmlFor='eventType' style={leftAlign}>Building :  </label>
                        <input
                            className='form-control'
                            id='building'
                            onChange={this.handleChange}
                            name='building'
                            type='text'
                            value={this.state.building}
                            style={rightAlign}
                        />
                        </div>

                        <br / >

                        <div style={divStyle}>
                        <label htmlFor='eventType' style={leftAlign}>City :  </label>
                        <input
                            className='form-control'
                            id='city'
                            onChange={this.handleChange}
                            name='city'
                            type='text'
                            value={this.state.city}
                            style={rightAlign}
                        />
                        </div>

                        <br / >

                        <div style={divStyle}>
                        <label htmlFor='eventType' style={leftAlign}>State :  </label>
                        <input
                            className='form-control'
                            id='state'
                            onChange={this.handleChange}
                            name='state'
                            type='text'
                            value={this.state.state}
                            style={rightAlign}
                        />
                        </div>

                        <br / >

                        <div style={divStyle}>
                        <label htmlFor='eventType' style={leftAlign}>SLT Leader :  </label>
                        <select
                            className='form-control'
                            id='slt_leader'
                            onChange={this.handleChange}
                            name='slt_leader'
                            value={this.state.slt_leader}
                            style={rightAlign}
                        >
                            <option value=''></option>
                            <option>Amy Hood</option>
                            <option>Brad Smith</option>
                            <option>Chris Caposela</option>
                            <option>Harry Shum</option>
                            <option>Jean-Philippe-Courtis</option>
                            <option>Judson Aithoff</option>
                            <option>Kathleen Hogan</option>
                            <option>Kevin Scott</option>
                            <option>Kurt DelBene</option>
                            <option>Non SLT Aligned</option>
                            <option>Peggy Johnson</option>
                            <option>Phil Spencer</option>
                            <option>Rajesh Jha</option>
                            <option>Scott Guthrie</option>
                        </select>

                        </div>

                        <br / >

                        <div style={divStyle}>
                        <label htmlFor='eventType' style={leftAlign}>Leader :  </label>
                        <input
                            className='form-control'
                            id='leader'
                            onChange={this.handleChange}
                            name='leader'
                            type='text'
                            value={this.state.leader}
                            style={rightAlign}
                        />
                        </div>

                        <br />
                        <button type='submit' className='btn btn-primary' style ={leftAlign}>
                            Filter
                        </button>

                        <button style ={leftAlign} onClick={this.clearFilter}>
                            Clear
                        </button>
                    </div>
                </form>
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
)(FilterEvents);