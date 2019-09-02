import React from 'react'
import 'react-big-calendar/lib/css/react-big-calendar.css'
import { Calendar , momentLocalizer } from 'react-big-calendar'

import moment from 'moment'

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

export default class GiveCalendar extends React.Component {
    render() {
        return(
            <Calendar
                style={calStyle}
                popup
                localizer={localizer}
                views={{month:true, week : true, day : true}}
                events={events}
                defaultDate={new Date(2019, 9, 1)}
            />
        )
    }
}