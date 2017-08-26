import React from 'react'
import {Link} from 'react-router'
import Logo from '../img/logo_db3.png'

const Home =()=>{
  return (
    <div className="home container">
      <section className="top row">
        <div className="left col-sm-8">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
        <div className="right col-sm-4">
          <img src={Logo} alt="Logo" />
        </div>
      </section>

      <section className="bottom row">
        <div className="left col-sm-4">
            <Link className="btn btn-brand" to="/company">Your Company</Link>
        </div>
        <div className="right col-sm-8">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </div>
      </section>
    </div>
  )
}

export default Home
