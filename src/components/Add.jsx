import axios from 'axios'
import React, { useState } from 'react'

const Add = () => {
    const[data,setData]=useState(
        {
            "name":"",
            "type":"",
            "date":"",
            "hero":""
        }
    )
   const inputHandler=(event)=>{
    setData({...data,[event.target.name]:event.target.value})
   }
   const readValue=()=>{
    console.log(data)
    axios.post("http://localhost:8080/add",data).then(
        (response)=>{
            console.log(response.data)
            if(response.data.status=="success")
                {
                    alert("Succesfully Added")
                }
            else
            {
                alert("Not Added")
            }    
            }
    ).catch().finally()

   }
  return (
    <div>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row">
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Name</label>
                            <input type="text" name="name" value={data.name} onChange={inputHandler} className="form-control" />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Type</label>
                            <input type="text" name="type" value={data.type} onChange={inputHandler} className="form-control" />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Release Date</label>
                            <input type="date" name="date" value={data.date} onChange={inputHandler} id="" className="form-control" />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Hero</label>
                            <input type="text" name="hero" value={data.hero} onChange={inputHandler} className="form-control" />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <button className="btn btn-success" onClick={readValue}>Add</button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
  )
}

export default Add