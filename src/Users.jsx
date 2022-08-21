import React from 'react'
import { Link, useNavigate } from 'react-router-dom'


function Users() {
  const navigate = useNavigate()
  let newuser = () => {
    navigate("Newuser")
  }

  const data = [
    {
      id: 1,
      name: "Tiger Nixon",
      position: "System Architect",
      office: "Edinburgh",
      age: 61,
      start_date: "2011/04/25",
      salary: "$320,800",
    },
    {
      id: 2,
      name: "Garrett Winters",
      position: "Accountant",
      office: "Tokyo",
      age: 63,
      start_date: "2011/07/25",
      salary: "$170,750"
    },
    {
      id: 3,
      name: "Ashton Cox",
      position: "Junior Technical Author",
      office: "San Francisco",
      age: 66,
      start_date: "2009/01/12",
      salary: "$86,000",
    },
    {
      id: 4,
      name: "Cedric Kelly",
      position: "Senior Javascript Developer",
      office: "Edinburgh",
      age: 22,
      start_date: "2012/03/29",
      salary: "$433,060",
    },
    {
      id: 5,
      name: "Colleen Hurst",
      position: "Javascript Developer",
      office: "San Francisco",
      age: 43,
      start_date: "2009/09/15",
      salary: "$205,500",
    },

  return (
    <>
      <div class="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 class="h3 mb-0 text-gray-800">Users</h1>
        <button onClick={newuser} class="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i
          class="fas fa-download fa-sm text-white-50"></i> Create Users</button>
      </div>
      <div class="row">
        <div class="card shadow mb-4">
          <div class="card-header py-3">
            <h6 class="m-0 font-weight-bold text-primary">DataTables Example</h6>
          </div>
          <div class="card-body">
            <div class="table-responsive">
              <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                <thead>
                  <tr>
                    <th>#Sl</th>
                    <th>Name</th>
                    <th>Position</th>
                    <th>Office</th>
                    <th>Age</th>
                    <th>Start date</th>
                    <th>Salary</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tfoot>
                  <tr>
                    <th>#Sl</th>
                    <th>Name</th>
                    <th>Position</th>
                    <th>Office</th>
                    <th>Age</th>
                    <th>Start date</th>
                    <th>Salary</th>
                    <th>Action</th>
                  </tr>
                </tfoot>
                <tbody>
                  
                    {
                      data.map((API,index)=>{
                        return(
                          <>
                          <tr>
                          <th>{index+1}</th>
                          <th>{API.name}</th>
                          <th>{API.position}</th>
                          <th>{API.office}</th>
                          <th>{API.age}</th>
                          <th>{API.start_date}</th>
                          <th>{API.salary}</th>
                          <th>
                          
                            <Link to={`${API.id}`} class="btn btn-sm btn-primary mr-2">View</Link>
                            <button class="btn btn-sm btn-warning mr-2">Edit</button>
                            <button class="btn btn-sm btn-danger mt-2">Delete</button>
                          
                          </th>
                          </tr>
                          </>
                        );
                      })
                    }
                  
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Users