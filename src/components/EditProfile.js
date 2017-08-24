import React, { Component } from 'react';
import Sidebar from './Sidebar';

class EditProfile extends Component {
  render() {
    return (
      <div className="edit-profile container">
        <div className="row">
          <div className="sidebar col-sm-3">

            <Sidebar />

          </div>
          <div className="form col-sm-9">
            <form>
              <div className="form-group">
                <label>Brand name:</label>
                <input className="form-control" placeholder="e.g: Unip Warehouse" />
              </div>

              <div className="form-group">
                <label>Description</label>
                <textarea className="form-control"></textarea>
              </div>

              <button className="btn btn-brand" type="submit">save</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default EditProfile;
