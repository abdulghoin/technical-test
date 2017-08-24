import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Sidebar extends Component {
  render() {
    return (
      <div className="list-group">
        <Link className="list-group-item list-group-item-action" to="/profile">My Profile</Link>
        <Link className="list-group-item list-group-item-action" to="/edit-profile">Edit</Link>
      </div>
    );
  }
}

export default Sidebar;
