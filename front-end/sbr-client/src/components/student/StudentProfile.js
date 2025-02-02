import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import ProfileImage from '../student/profile.jpg'


const StudentProfile = () => {

    const navigate = useNavigate();

    const{id} = useParams();
    
    const[student, setStudent] = useState({
            firstName:'',
            lastName:'',
            email:'',
            department:''
        });

        useEffect(()=>{
                loadStudents();
            },[]);

        const loadStudents = async()=>{
            const result = await axios.get(
                `http://localhost:8075/students/student/${id}`);
                setStudent(result.data);
               
        }
    
    
  return (
    <section style={{TbBackgroundColor:"whitesmoke"}}>
        <div className='contaioner py-5'>
            <div className = "row">
                <div className='col-lg-3'>
                    <div className='card mb-4'>
                        <div className='card-body text-center'>
                           <img
                            src = {ProfileImage}
                            alt = "avatar"
                            className='rounded-circle img-fluid'
                            style={{width:150 , height:150, objectFit:'cover'}}/>
                            <h5 className='my-3'>
                                {`${student.firstName} ${student.lastName}`}
                            </h5>
                            <div className='d-flex justify-content-center mb-2'>
                                <button
                                    type ="button"
                                    className='btn btn-outline-primary'>
                                    Call
                                </button>
                                <button
                                    type ="button"
                                    className='btn btn-outline-primary'>
                                    Message
                                </button>
                            </div>
                        </div>    
                    </div>    
                </div> 
                <div className='col-lg-9'>
                    <div className='card mb-4'>
                        <div className='card-body'>
                            <hr/>

                            <div className='row'>
                                <div className='col-sm-3'>
                                    <h5 className='mb-0'>
                                        First Name
                                    </h5>
                                </div>
                                <div className='col-sm-9'>
                                    <p className='text-muted mb-0'>
                                        {student.firstName}
                                    </p>
                                    
                                </div>
                                <hr/>
                                
                            </div>

                            <div className='row'>
                                <div className='col-sm-3'>
                                    <h5 className='mb-0'>
                                        Last Name
                                    </h5>
                                </div>
                                <div className='col-sm-9'>
                                    <p className='text-muted mb-0'>
                                        {student.lastName}
                                    </p>
                                </div>
                                <hr/>
                            </div>

                            <div className='row'>
                                <div className='col-sm-3'>
                                    <h5 className='mb-0'>
                                        Email
                                    </h5>
                                </div>
                                <div className='col-sm-9'>
                                    <p className='text-muted mb-0'>
                                        {student.email}
                                    </p>
                                </div>
                                <hr/>
                            </div>

                            <div className='row'>
                                <div className='col-sm-3'>
                                    <h5 className='mb-0'>
                                        Department
                                    </h5>
                                </div>
                                <div className='col-sm-9'>
                                    <p className='text-muted mb-0'>
                                        {student.department}
                                    </p>
                                </div>
                                <hr/>
                            </div>
                        </div>
                    </div>
                </div>

                <button className='btn btn-outline-warning' onClick={() => navigate('/view-students')}>
                    Back to Students List
                </button>
        </div>
        </div>
    </section>
  )
}

export default StudentProfile