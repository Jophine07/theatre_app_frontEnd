import axios from 'axios'
import React, { useState } from 'react'

const SearchDelete = () => {
  const [data, setData] = useState(
    {
      "name": ""
    }
  )
  const [result, setResult] = useState(

    []
  )
  const inputHandler = (event) => {
    setData({ ...data, [event.target.name]: event.target.value })
  }
  const readvalue = () => {
    console.log(data)
    axios.post("http://localhost:8080/Search", data).then(
      (response) => {
        setResult(response.data)
      }
    ).catch(
      (error) => {
        console.log(error)
      }
    ).finally()
  }
  const deleteValue = (name) => {
    let input = { "_id": name }
    axios.post("http://localhost:8080/delete", input).then(
      (response) => {
        console.log(response.data)
        if (response.data.status == "success") {
          alert("successfully Deleted")
        }
        else {
          alert("Not deleted")
        }
      }
    )
  }
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <div className="row g-3">
              <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <label htmlFor="" className="form-label">Film Name</label>
                <input type="text" name="name" value={data.name} onChange={inputHandler} id="" className="form-control" />
              </div>
              <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <button className="btn btn-success" onClick={readvalue}>Search</button>
              </div>
            </div>

          </div>
        </div>
        <div className="row">
          <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

            <table class="table">
              <thead>
                <tr>
                  <th scope="col">Name</th>
                  <th scope="col">Type</th>
                  <th scope="col">Release Date</th>
                  <th scope="col">Hero</th>
                </tr>
              </thead>
              <tbody>
                {
                  result.map(
                    (value, index) => {
                      return <tr>
                        <td scope="row">{value.name}</td>
                        <td>{value.type}</td>
                        <td>{value.date}</td>
                        <td>{value.hero}</td>
                        <td><button className="btn btn-danger" onClick={() => { deleteValue(value._id) }}>Delete</button></td>
                      </tr>
                    }
                  )
                }
              </tbody>
            </table>
          </div>
        </div>
      </div>


    </div>
  )
}

export default SearchDelete