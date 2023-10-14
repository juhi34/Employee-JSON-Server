import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'


const EmpCreate = () => {
    // use to go other page
    const navigate = useNavigate();

    // use these state to create data
    const [id, idchange] = useState("");
    const [name, namechange] = useState("");
    const [email, emailchange] = useState("");
    const [phone, phonechange] = useState("");
    const [active, activechange] = useState(true);
    const [validation, valchange] = useState(false);


    // send employee data to api
    const handlesubmit = (e) => {
        e.preventDefault();
        const empdata = { name, email, phone, active };

        fetch(" http://localhost:8000/employee/",
            {
                method: "POST",
                headers: { "content-type": "application/json" },
                body: JSON.stringify(empdata)
            }).then((response) => {
                alert("save successfully")
                navigate('/');
            }).catch((error) => {
                console.log(error);
            })

    }





    return (
        <div className='container'>
            <div className='offset-lg-3 col-lg-15'>
                <form className='container' onSubmit={handlesubmit}>
                    <div className='card'>
                        <div className='card-title'>
                            <h2>employee Create</h2>
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
                                        <button className='btn btn-success' type="submit">Save</button>
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

export default EmpCreate