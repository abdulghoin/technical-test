// import Packages
import React from 'react'

const EditProfile =()=>{
  return (
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
  )
}

export default EditProfile
