import React from 'react'
import { useFormik } from 'formik';
import axios from 'axios';

function CreateProduct() {
  const formik = useFormik({
    initialValues:{
      Product:"",
      Gender:"",
      About:"",
      Price:"",
    },
    validate:(value)=>{
      var errors = {}

      if (value.Product ===""){
        errors.Product = "Enter the Product"
      } if(value.Product.length < 5) {
        errors.Product ="Enter the Above five letter"
      }

      return errors
    },
    onSubmit:async(total)=>{
      await axios.post("https://630098ce59a8760a757cc0bc.mockapi.io/Groot",total)
      alert("New Product Created Done 'BOSS'")
    }
  })
  return (
    <div className="container ">
      <form onSubmit={formik.handleSubmit}>
      <div className="row">
      <div className="col-lg-6">
        <label>Product</label>
        <input className="form-control" type={"text"} value={formik.values.Product} onChange={formik.handleChange} name="Product"/>
        <span style={{color:"red"}}>{formik.errors.Product}</span>
      </div>
      <div className="col-lg-6">
        <label>Gender</label>
        <input className="form-control" type={"text"} value={formik.values.Gender} onChange={formik.handleChange} name="Gender"/>
      </div>
      <div className="col-lg-6">
        <label>About</label>
        <input className="form-control" type={"text"} value={formik.values.About} onChange={formik.handleChange} name="About"/>
      </div>
      <div className="col-lg-6">
        <label>Price</label>
        <input className="form-control" type={"text"} value={formik.values.Price} onChange={formik.handleChange} name="Price" />
      </div>
      <div>
      <button className="btn btn-danger mt-2 ms-2" type="submit" value="submit" disabled={!formik.isValid} >Submit</button>
      </div>
      </div>
      </form>
    </div>
  )
}

export default CreateProduct