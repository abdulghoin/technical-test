// import Packages
import React from 'react'
import {Link} from 'react-router'

const LeftBar =()=>{
  let nav = [
    {
      link : '/company',
      title : 'My Profile'
    },
    {
      link : '/company/edit',
      title : 'Edit'
    },
  ];
  nav = nav.map((item, i)=>{
    let {link, title} = item;

    return(
      <Link
        key={i}
        to={link}
        className="list-group-item list-group-item-action"
      >
        {title}
      </Link>
    )
  })
  return (
    <div className="sidebar col-sm-3">
      <div className="list-group">
        {nav}
      </div>
    </div>
  )
}

export default LeftBar
