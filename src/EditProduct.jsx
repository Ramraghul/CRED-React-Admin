import React, { useEffect } from 'react'
import { useFormik } from 'formik';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function EditProduct() {
  const params = useParams()
  const formik = useFormik({
    initialValues: {
      Product: "",
      Gender: "",
      About: "",
      Price: "",
    },
    validate: (value) => {
      var errors = {}

      if (value.Product === "") {
        errors.Product = "Enter the Product"
      }
      return errors
    },
    onSubmit: async (data) => {
      try {
        await axios.put(`https://630098ce59a8760a757cc0bc.mockapi.io/Groot/${params.id}`, data)
        alert("Edit data is Done 'BOSS'")
      } catch (error) {

      }
    }
  })

  useEffect(() => {
    ComeData()
  }, [])

  let ComeData = async () => {
    try {
      let set = await axios.get(`https://630098ce59a8760a757cc0bc.mockapi.io/Groot/${params.id}`)
      formik.setValues({
        Product: set.data.Product,
        Gender: set.data.Gender,
        About: set.data.About,
        Price: set.data.Price,
      })
    } catch (error) {

    }
  }
  return (
    <div className="container ">
      <form onSubmit={formik.handleSubmit}>
        <div className="row">
          <div className="col-lg-6">
            <label>Product</label>
            <input className="form-control" type={"text"} value={formik.values.Product} onChange={formik.handleChange} name="Product" />
            <span style={{ color: "red" }}>{formik.errors.Product}</span>
          </div>
          <div className="col-lg-6">
            <label>Gender</label>
            <input className="form-control" type={"text"} value={formik.values.Gender} onChange={formik.handleChange} name="Gender" />
          </div>
          <div className="col-lg-6">
            <label>About</label>
            <input className="form-control" type={"text"} value={formik.values.About} onChange={formik.handleChange} name="About" />
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

export default EditProduct;