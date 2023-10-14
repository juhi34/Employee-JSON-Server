import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'



const EmpEdit = () => {
    const { empid } = useParams();

    const navigate = useNavigate();

    const [id, idchange] = useState("");
    const [name, namechange] = useState("");
    const [email, emailchange] = useState("");
    const [phone, phonechange] = useState("");
    const [active, activechange] = useState(true);
    const [validation, valchange] = useState(false);



    // Get Data By ID
    useEffect(() => {
        fetch(`http://localhost:8000/employee/${empid}`,)
            .then((response) => {
                return response.json()
            }).then((response) => {
                console.log(response)
                idchange(response.id);
                namechange(response.name);
                emailchange(response.email);
                phonechange(response.phone);
                activechange(response.active);
                // console.log(employee[0].name);
            }).catch((error) => {
                console.log(error)
            })

    }, []);

  



    const handlesubmit = (e) => {
        e.preventDefault();
        const empdata = {id, name,email,phone,active}
        fetch(`http://localhost:8000/employee/${empid}`,
            {
                method: "PUT",
                headers: { "content-type": "application/json" },
                body: JSON.stringify(empdata)
            }).then((response) => {
                alert("Update successfully")
                navigate('/');
                console.log(response);
            }).catch((error) => {
                console.log(error);
            })

    }






    return (
        <div className='row'>
            <div className='offset-lg-3 col-lg-15'>
                <form className='container'>
                    <div className='card'>
                        <div className='card-title'>
                            <h2>employee Edit</h2>
                        </div>
                        <div className='card-body'>
                            <div className='row'>
                                <div className='col-lg-12'>
                                    <div className='from-group'>
                                        <label>ID</label>
                                        <input value={id} disabled="disabled" className='form-control'></input>
                                    </div>
                                </div>
                                <div className='col-lg-12'>
                                    <div className='from-group'>
                                        <label>Name</label>
                                        <input required value={name} onMouseDown={e => valchange(true)} onChange={e => namechange(e.target.value)} className='form-control'></input>
                                        {name.length == 0 && validation && <span className='text-danger'>Enter the name</span>}
                                    </div>
                                </div>
                                <div className='col-lg-12'>
                                    <div className='from-group'>
                                        <label>Email</label>
                                        <input value={email} onChange={e => emailchange(e.target.value)} className='form-control'></input>
                                    </div>
                                </div>
                                <div className='col-lg-12'>
                                    <div className='from-group'>
                                        <label>Phone</label>
                                        <input value={phone} onChange={e => phonechange(e.target.value)} className='form-control'></input>
                                    </div>
                                </div>
                                <div className='col-lg-12'>
                                    <div className='from-check'>
                                        <input checked={active} onChange={e => activechange(e.target.checked)} type="checkbox" className='form-check-input'></input>
                                        <label className='form-check-label'>Is Active</label>
                                    </div>
                                </div>
                                <div className='col-lg-12'>
                                    <div className='from-check'>
                                        <button onClick={handlesubmit} className='btn btn-success' type="submit">Save</button>
                                        <Link to="/" className='btn btn-danger'>Back</Link>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>

    );
}



export default EmpEdit