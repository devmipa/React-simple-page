import React from 'react'
import List from './List'

class Body extends React.Component {
    render() {
        return(
            <div>
                <h1 className='Titles'>Why React is awesome!</h1>
                <ul>
                    <List value='create UI by pieces' />
                    <List value='more maintaniable' />
                    <List value='is a hireable skill' />
                </ul>
            </div>
        )
    }
}
export default Body;