import React, { useEffect, useState } from 'react'
import { Link, useActionData, useParams } from 'react-router-dom'

const EmpDetails = () => {
  const {empid} = useParams();
  console.log(empid);
  const [empdata, empdatachange] = useState({})


  // Get Data By ID
  useEffect(() => {
    fetch(`http://localhost:8000/employee/${empid}`, {
      method: 'GET'
    }).then((response) => {
      return response.json()
    }).then((response) => {
      empdatachange(response);
      // console.log(response)
    }).catch((error) => {
      console.log(error)
    })

  }, []);



  console.log(empdata, 25)

  return (

    <div className='card'>
      <div className='card-title'>
        <h2>Employee Detail</h2>
      </div>
      <div className='card-body'>

        {empdata &&
          <div>
            <h2>The Employee name is:<b>{empdata.name}</b> ({empdata.id})</h2>
            <h3>Contact Details</h3>
            <h5>Email is: {empdata.email}</h5>
            <h5>Phone is: {empdata.phone}</h5>
            <Link className='btn btn-danger' to='/'>Back to Listing</Link>
          </div>
        }
      </div>
    </div>
  );
}

export default EmpDetails