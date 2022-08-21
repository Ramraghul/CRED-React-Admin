import axios from 'axios';
import { useFormik } from 'formik';
import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom';

function Edit() {
  const params = useParams()
  const formic = useFormik({
    initialValues :{
      name:"",
      position:"",
      office:"",
      age:"",
      start_date:"",
      salary:""
    },
    validate:(value)=>{
      let error ={}
      if(value.name === ""){
        error.name ="Please enter the Name"
      }

      if(value.position === ""){
        error.position ="Please enter the Position"
      }

      return error;
    },
    onSubmit :async(value)=>{
     await axios.put(`https://630098ce59a8760a757cc0bc.mockapi.io/Tony/${params.id}`,value)
     alert("User Update done")
    }
  })

  useEffect (()=>{
    loadUser()
  },[])

  let loadUser =  async()=>{
    try {
      let user =  await axios.get(`https://630098ce59a8760a757cc0bc.mockapi.io/Tony/${params.id}`)
      formic.setValues({
        name : user.data.name,
        position : user.data.position,
        office : user.data.office,
        age : user.data.age,
        start_date : user.data.start_date,
        salary : user.data.salary
      })
    } catch (error) {
      
    }
  }
  
  return (
    <div className="container ">
      <form onSubmit={formic.handleSubmit}>
      <div className="row">
      <div className="col-lg-6">
        <label>name</label>
        <input className="form-control" type={"text"} value={formic.values.name} onChange={formic.handleChange} name="name"/>
        <span style={{color:"red"}}>{formic.errors.name}</span>
      </div>
      <div className="col-lg-6">
        <label>Position</label>
        <input className="form-control" type={"text"} value={formic.values.position} onChange={formic.handleChange} name="position"/>
        <span style={{color:"red"}}>{formic.errors.position}</span>
      </div>
      <div className="col-lg-6">
        <label>Office</label>
        <input className="form-control" type={"text"} value={formic.values.office} onChange={formic.handleChange} name="office"/>
      </div>
      <div className="col-lg-6">
        <label>Age</label>
        <input className="form-control" type={"text"} value={formic.values.age} onChange={formic.handleChange} name="age"/>
      </div>
      <div className="col-lg-6">
        <label>Start_Date</label>
        <input className="form-control" type={"text"} value={formic.values.start_date} onChange={formic.handleChange} name="start_date"/>
      </div>
      <div className="col-lg-6">
        <label>Salary</label>
        <input className="form-control" type={"text"} value={formic.values.salary} onChange={formic.handleChange} name="salary"/>
      </div>
      <div>
      <button className="btn btn-danger mt-2 ms-2" type="submit" value="submit" disabled={!formic.isValid}>Submit</button>
      </div>
      </div>
      </form>
    </div>
  )
}

export default Edit