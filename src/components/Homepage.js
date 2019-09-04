import React from 'react'
import Header from './shared/Header';
import FilterEvents from './filter/filter';
import GiveCalendar from './calendar/calender';
import { connect } from 'react-redux'
import * as events from '../api/events'
import {updateEvents} from '../components/store/store'

const divStyle = {
    display : 'flex',
    flexDirection : 'row',
    width : '100%'
}
const leftAlign = {
    width :'25%'
}
const rightAlign = {
    width : '75%'
}

class Homepage extends React.Component {

    async componentDidMount()
    {
        const allEvents = await events.getEvents()
        this.props.dispatch(updateEvents(allEvents.response))

    }

    render() {
        return(
            <div>
               <Header />
               <div style = {divStyle}>
                   <div style={leftAlign}>
                   <FilterEvents />
                   </div>
                   <div style={rightAlign}>
                   <GiveCalendar />
                   </div>
               </div>
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
)(Homepage);