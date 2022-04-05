import React from 'react'
class List extends React.Component {
    constructor(props){
        super(props)
    }
    render(){
        return(
            <li className='MyLists'>{this.props.value}</li>
        )
    }
}

export default List;