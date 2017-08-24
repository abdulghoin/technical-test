import React, { Component } from 'react';
import Sidebar from './Sidebar';

class Profile extends Component {
  render() {
    return (
      <div className="profile container">
        <div className="row">
          <div className="sidebar col-sm-3">

            <Sidebar />

          </div>
          <div className="detail col-sm-9">
            <header>
              <div className="avatar">
                <div className="pic"></div>
                <h3 className="text-center">Brand Name</h3>
              </div>
            </header>
            <div className="description">
              <h3>Description</h3>
              <p>
                Viverra neque sit amet risus. Nunc pellentesque aliquam orci. Proin neque elit, mollis vel, tristique nec, varius consectetuer, lorem. Nam malesuada ornare nunc. Duis turpis turpis, fermentum a, aliquet quis, sodales at, dolor. Duis eget velit eget risus fringilla hendrerit. Nulla facilisi. Mauris turpis pede, aliquet ac, mattis sed, consequat in.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Profile;
