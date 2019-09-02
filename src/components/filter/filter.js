import React from 'react'

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

export default class FilterEvents extends React.Component {
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

    handleSubmit (e) {
        e.preventDefault()
        console.log(this.state)
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
                            <option selected value=''></option>
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
                        <input
                            className='form-control'
                            id='slt_leader'
                            onChange={this.handleChange}
                            name='slt_leader'
                            type='text'
                            value={this.state.slt_leader}
                            style={rightAlign}
                        />
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