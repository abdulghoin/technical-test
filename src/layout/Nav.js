// import Packages
import React from 'react'
import {Link} from 'react-router'

const Nav =()=>{
  return(
    <div className="nav">
      <ul className="list-inline text-center">
        <li className="list-inline-item"><Link to="/">HOME</Link></li>
      </ul>
    </div>
  )
}

export default Nav
