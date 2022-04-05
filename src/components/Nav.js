import React from 'react'

class Nav extends React.Component {
    render (){
        return(
            <header>
                <nav className='nav'>
                    <img className='nav-logo' src='./logo192.png' />
                    <ul className='nav-items'>
                        <li>Price</li>
                        <li>About us</li>
                        <li>Contact</li>
                    </ul>
                </nav>
            </header>
        )
    }
}

export default Nav;