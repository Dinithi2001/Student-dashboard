 import axios from 'axios';
import React, { useState } from 'react'
 import {Link, useNavigate} from "react-router-dom";
 
 const AddStudents = () => {

    let navigate = useNavigate();

    const[student, setStudent] = useState({
        firstName:'',
        lastName:'',
        email:'',
        department:''
    })

    const{firstName,lastName,email,department} = student;

    const handleInputChange = (e)=>{
        setStudent({...student,[e.target.name] : e.target.value});
      }
  

    const updateStudent = async(e)=>{
        e.preventDefault();
        await axios.post('http://localhost:8075/students', student);
        
        navigate('/view-students');

           
    };

   return (
     <div className='col-sm-8 py-2 px-5'> 
     <h2 className='mt-5'>Add Student</h2> 
       <form onSubmit={(e)=>updateStudent(e)}> 
       <div className='input-group mb-5'>
                <label className='input-group-text' htmlFor='firstName'>
                First Name
                </label>
                <input className='form-control col-sm-6'
                type='text'
                name='firstName'
                id='firstName'
                required
                value={firstName}
                onChange={(e)=>handleInputChange(e)}/>
            </div>

            <div className='input-group mb-5'>
                <label className='input-group-text' htmlFor='lastName'>
                Last Name
                </label>
                <input className='form-control col-sm-6'
                type='text'
                name='lastName'
                id='lastName'
                required
                value={lastName}
                onChange={(e)=>handleInputChange(e)}/>
            </div>

            <div className='input-group mb-5'>
                <label className='input-group-text' htmlFor='email'>
                Email
                </label>
                <input className='form-control col-sm-6'
                type='email'
                name='email'
                id='email'
                required
                value={email}
                onChange={(e)=>handleInputChange(e)}/>

            </div>

            <div className='input-group mb-5'>
                <label className='input-group-text' htmlFor='department'>
                Department
                </label>
                <input className='form-control col-sm-6'
                type='text'
                name='department'
                id='department'
                required
                value={department}
                onChange={(e)=>handleInputChange(e)}/>
            </div>

            <div className='row mb-5'>
                <div className='col-sm-2'>
                    <button
                        className='btn btn-outline-success btn-lg'
                        type='submit'>
                        Save
                    </button>
                </div>

                <div className='col-sm-2'>
                    <Link 
                        to={'/view-students'}
                        className='btn btn-outline-warning btn-lg'
                        type='submit'>
                        Cancel
                    </Link>
                </div>
            </div>
            
       </form>
     </div>
   )
 }
 
 export default AddStudents