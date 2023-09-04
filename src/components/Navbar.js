import React from 'react'
import { Link } from 'react-router-dom'
import tciimg from '../images/tci logo.jpg'
import towncentre from '../images/towncentre.png'

function Navbar() {
  return (
    <div className='header'>
        <div className='header-logo'>
            <div className='tci-logo'>
                <img src={tciimg} />
            </div>
            <div className='towncentre-logo'>
                <img src={towncentre} />
            </div>
        </div>
        <div className='header-tabs'>
            <ul>
                <Link smooth to='/' style={{ textDecoration: 'none', color: 'black'}} >
                  <li>Clients</li>
                </Link>

                <Link smooth to='/todo' style={{ textDecoration: 'none', color: 'black'}} >
                  <li>To Do List</li>
                </Link>
            </ul>
        </div>
    </div>
  )
}

export default Navbar