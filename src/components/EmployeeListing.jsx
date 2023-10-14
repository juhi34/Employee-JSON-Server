import React, { useEffect, useState } from 'react'
import '../components/Employee.css'
import { Link, useNavigate } from 'react-router-dom';



const EmployeeListing = () => {
    const [employee, setEmployee] = useState([]);
    // http://localhost:8000/employee
   
    // get - useEffect


    // Get All data
    useEffect(() => {
        fetch('http://localhost:8000/employee', {
            method: 'GET'
        }).then((response) => {
            return response.json()
        }).then((data) => {
            console.log(data)
            setEmployee(data)
            console.log(employee);
            // console.log(employee[0].name);
        }).catch((error) => {
            console.log(error)
        })
    }, [])


// remove function

const RemoveFunction=(id)=>{
    console.log(id, 34)
  if(window.confirm("do you want to delete?")){
    fetch(`http://localhost:8000/employee/${id}`,
    {
        method: "DELETE",
    }).then((res) => {
        alert("Remove successfully")
        window.location.reload();
        console.log(res);
    }).catch((error) => {
        console.log(error);
    })
  }
}



    return (
        <div className='container'>
            <div className='card'>
                <div className='card-title'>
                    <h2>Employee Listing</h2>
                </div>
                <div className='card-body'>
                    <div className='divbtn'>
                        <Link to="employee/create" className='btn btn-success'>Add New (+)</Link>
                    </div>
                    <table className='table table-bordered'>
                        <thead className="table-dark">
                            <tr>
                                <td>ID</td>
                                <td>Name</td>
                                <td>Email</td>
                                <td>Phone</td>
                                <td>Action</td>
                            </tr>
                        </thead>

                        <tbody>
                            {/* fetching data dynamicaly from api */}

                            {employee &&
                                employee.map(item => (

                                    <tr key={item.id}>
                                        <td>{item.id}</td>
                                        <td>{item.name}</td>
                                        <td>{item.email}</td>
                                        <td>{item.phone}</td>
                                        <td>
                                            <Link to={`emlement/edit/${item.id}`} onClick={() => { LoadEdit(item.id) }} className='btn btn-success'>Edit
                                            </Link>

                                            <Link to='' onClick={() => { RemoveFunction(item.id) }} className='btn btn-danger'>Remove</Link>

                                            <Link to={`/employee/details/${item.id}`} onClick={() => { LoadDetail(item.id) }} className='btn btn-primary'>Details</Link>
                                        </td>
                                    </tr>


                                ))
                            }
                        </tbody>

                    </table>
                </div>
            </div>
        </div>

    )
}

export default EmployeeListing