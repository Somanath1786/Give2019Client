import React from 'react'
import Header from './shared/Header';
import FilterEvents from './filter/filter';
import GiveCalendar from './calendar/calender';

const divStyle = {
    display : 'flex',
    flexDirection : 'row',
    width : '100%'
}
const leftAlign = {
    width :'25%',
    borderStyle : 'solid'

}
const rightAlign = {
    width : '75%',
    borderStyle : 'solid'
}

export default class Homepage extends React.Component {
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