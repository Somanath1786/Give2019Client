import { createStore } from 'redux'

// Set up the initial state of the store
const initState = {
    // events : [
    //     {
    //         'title' : 'Test 1',
    //         'start' : new Date(2019, 9, 4, 12, 0, 0),
    //         'end' : new Date(2019, 9, 4, 13, 0, 0)
    //     },
    //     {
    //         'title' : 'Test 2',
    //         'start' : new Date(2019, 9, 5, 12, 0, 0),
    //         'end' : new Date(2019, 9, 5, 13, 0, 0)
    //     },
    //     {
    //         'title' : 'Test 3',
    //         'start' : new Date(2019, 9, 6, 12, 0, 0),
    //         'end' : new Date(2019, 9, 6, 13, 0, 0)
    //     },
    //     {
    //         'title' : 'Test 3a',
    //         'start' : new Date(2019, 9, 6, 12, 0, 0),
    //         'end' : new Date(2019, 9, 6, 13, 0, 0)
    //     },
    //     {
    //         'title' : 'Test 3b',
    //         'start' : new Date(2019, 9, 6, 12, 0, 0),
    //         'end' : new Date(2019, 9, 6, 13, 0, 0)
    //     },
    //     {
    //         'title' : 'Test 3c',
    //         'start' : new Date(2019, 9, 6, 12, 0, 0),
    //         'end' : new Date(2019, 9, 6, 13, 0, 0)
    //     },
    //     {
    //         'title' : 'Test 3d',
    //         'start' : new Date(2019, 9, 6, 12, 0, 0),
    //         'end' : new Date(2019, 9, 6, 13, 0, 0)
    //     },
    //     {
    //         'title' : 'Test 3e',
    //         'start' : new Date(2019, 9, 6, 12, 0, 0),
    //         'end' : new Date(2019, 9, 6, 13, 0, 0)
    //     }
    // ]
    events: []
}


// Set up a reducer
export function reducer(state=initState , action=[]) {
    switch(action.type) {
        case 'UPDATE' :
            return Object.assign({}, state, {
                events : action.eventList
            })

        default :
        return state
    }
}


export function updateEvents(events)
{
    for(let i=0; i < events.length; i++)
    {
        events[i].start = new Date(events[i].start)
        events[i].end = new Date(events[i].end)
    }
    return {
        type : 'UPDATE',
        eventList : events
    }
}

// Create the store
const store = createStore (
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store