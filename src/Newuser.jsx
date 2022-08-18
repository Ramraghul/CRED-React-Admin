import React from 'react'

function Newuser() {
  return (
    <div class="container ">
      <div class="col-lg-6">
        <label>Username</label>
        <input class="form-control" type={"type"}></input>
      </div>
      <div class="col-lg-6">
        <label>Position</label>
        <input class="form-control" type={"type"}></input>
      </div>
      <div class="col-lg-6">
        <label>Office</label>
        <input class="form-control" type={"type"}></input>
      </div>
      <div class="col-lg-6">
        <label>Age</label>
        <input class="form-control" type={"type"}></input>
      </div>
      <div class="col-lg-6">
        <label>Start_Date</label>
        <input class="form-control" type={"type"}></input>
      </div>
      <div class="col-lg-6">
        <label>Salary</label>
        <input class="form-control" type={"type"}></input>
      </div>
      <div>
      <button class="btn btn-danger mt-2 ms-2">Submit</button>
      </div>
    </div>
  )
}

export default Newuser