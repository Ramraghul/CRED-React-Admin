import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Product() {

  const navigate = useNavigate()

  // Component navigation

  var CreateProduct = () => {
    navigate("/Product/create")
  }
  var EditProduct = (data) => {
    navigate(`edit/${data.id}`)
  }
  var ViewProduct = (data) => {
    navigate(`view/${data.id}`)
  }

  const [product, setproduct] = useState([])
  const [loading, setloading] = useState(false)

  useEffect(() => {
    dataLoad()
  }, [])

  let dataLoad = async () => {
    setloading(true)
    let date = await axios.get("https://630098ce59a8760a757cc0bc.mockapi.io/Groot")
    setproduct(date.data)
    setloading(false)

  }

  let dataDelete = async (id) => {
    try {
      await axios.delete(`https://630098ce59a8760a757cc0bc.mockapi.io/Groot/${id}`)
      dataLoad()
    } catch (error) {

    }
  }

  return (
    <>
      <div className="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 className="h3 mb-0 text-gray-800">Product</h1>
        <button onClick={() => { CreateProduct() }} className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i
          className="fas fa-download fa-sm text-white-50"></i> Create Product</button>
      </div>
      {
        loading ? <span>Loading...</span> : <div className="row">
        <div className="card shadow mb-4">
          <div className="card-header py-2">
            <h6 className="m-0 font-weight-bold text-primary">Product Tables</h6>
          </div>

          <div className="card-body">
            <div className="table-responsive">
              <table className="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                <thead>
                  <tr>
                    <th>#Sl</th>
                    <th>Product</th>
                    <th>Gender</th>
                    <th>About</th>
                    <th>Price</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tfoot>
                  <tr>
                    <th>#Sl</th>
                    <th>Product</th>
                    <th>Gender</th>
                    <th>About</th>
                    <th>Price</th>
                    <th>Action</th>
                  </tr>
                </tfoot>
                <tbody>
                  {
                    product?.map((value, index) => {
                      return (
                        <>
                          <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{value.Product}</td>
                            <td>{value.Gender}</td>
                            <td>{value.About}</td>
                            <td>{value.Price}</td>
                            <td>
                              <div class="btn-group me-2" role="group" aria-label="Second group">
                                <button onClick={() => { ViewProduct(value) }} type="button" class="btn btn-primary m-1">View</button>
                                <button onClick={() => { EditProduct(value) }} type="button" class="btn btn-warning m-1">Edit</button>
                                <button onClick={() => { dataDelete(value.id) }} type="button" class="btn btn-danger m-1">Delete</button>
                              </div>
                            </td>
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
      }
    </>
  )
}

export default Product