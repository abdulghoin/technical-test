// import Packages
import React from 'react'

// import local components
import LeftBar from './components/LeftBar'

const Company =({children})=>{
  return(
    <section className="profile container">
      <div className="row">
        <LeftBar />

        <div className="detail col-sm-9">
          {children}
        </div>
      </div>
    </section>
  )
}

export default Company
