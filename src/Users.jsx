import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'


function Users() {
  const navigate = useNavigate()
  let newuser = () => {
    navigate("Newuser")
  }
  const [data,setdata]=useState([])
  const [loading,setLoading] = useState(false)
  useEffect(()=>{
    loadData();
  },[])

  let loadData = async ()=>{
    setLoading(true)
    let final = await axios.get("https://630098ce59a8760a757cc0bc.mockapi.io/Tony")
    setdata(final.data)
    setLoading(false)
}

let Delete = async(id)=>{
  try {
    await axios.delete(`https://630098ce59a8760a757cc0bc.mockapi.io/Tony/${id}`)
    loadData();
  } catch (error) {
    
  }
}
  return (
    <>
      <div className="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 className="h3 mb-0 text-gray-800">Users</h1>
        <button onClick={newuser} className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i
          className="fas fa-download fa-sm text-white-50"></i> Create Users</button>
      </div>
      <div className="row">
      <div className="card shadow mb-4">
          <div className="card-header py-3">
            <h6 className="m-0 font-weight-bold text-primary">DataTables Example</h6>
          </div>
          <div className="card-body">
            <div className="table-responsive">
              <table className="table table-bordered" id="dataTable" width="100%" cellspacing="0">
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
                      data?.map((API,index)=>{
                        return(
                          <>
                          <tr key={index}>
                          <td>{index+1}</td>
                          <td>{API.name}</td>
                          <td>{API.position}</td>
                          <td>{API.office}</td>
                          <td>{API.age}</td>
                          <td>{API.start_date}</td>
                          <td>{API.salary}</td>
                          <th>
                          
                            <Link to={`${API.id}`} className="btn btn-sm btn-primary mr-2">View</Link>
                            <Link to={`edit/${API.id}`} className="btn btn-sm btn-warning mr-2">Edit</Link>
                            <button onClick={()=>{Delete(API.id)}} className="btn btn-sm btn-danger mt-2">Delete</button>
                          
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