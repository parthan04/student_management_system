import {
    useEffect,
    useState,
}
from "react";

import {useNavigate} from "react-router-dom"


import {getAllUsers} from "../services/userService"
import { getStudents } from "../services/studentService";
import { getCourse } from "../services/courseService";
import { getAllEnrollment } from "../services/enrollmentService";

export default function Dashboard(){

    const[users,setUsers]=useState([]);
    const[students,setStudents]=useState([]);
    const[courses,setCourses]=useState([]);
    const[enrollments,setEnrollments]=useState([])
    
    const navigate=useNavigate();

    useEffect(()=>{
        fetchUsers();
        fetchStudents();
        fetchCourses();
        fetchAllEnrollments();
    },[]);

    const fetchUsers=async()=>{

        try {
            const response=await getAllUsers();
            setUsers(response.data);
        } catch (error) {
            console.error("Error fetching users:", error);
        }
    }


    const fetchStudents=async()=>{

        try {
            const response=await getStudents();
            console.log("response",response)
            setStudents(response.data.data);
        } catch (error) {
            console.error("Error fetching students:", error);
        }
    }
    
    const fetchCourses=async()=>{
        try{
            const response=await getCourse();
            setCourses(response.data.data)
        }catch(err){
            console.error("Error fetching courses:",err.response)
        }
    }
    
    const fetchAllEnrollments=async()=>{
        try{
            const response=await getAllEnrollment();
            setEnrollments(response.data.data)
            console.log(response.data.data)
        }catch(err){
            console.error("Error fetching enrollments:",err.response)
        }
    }
    return(
        <>
            <div className="dashboard-container">
                
                {/* top head section */}

                <div className="top-head">
                    <div className="top-head-text">
                        <h1>Dashboard Overview</h1>
                        <p>Welcome back, here's what's happening today.</p>
                    </div>
                    <div className="top-head-actions">
                        <div onClick={()=>{navigate("/students")}} className="button">Add Student</div>
                        <div onClick={()=>{navigate("/enrollments")}} className="button">New Enrollment</div>
                    </div>
                </div>
                
                {/* card section */}
               <div className="card-Section">
                  <div className="card-container">

                    {users.length>0?(
                    <div className="cards" >
                        <div className="card-head">Total Users</div>
                        <div className="card-body">{users.length}</div>
                    </div>):(
                        <div className="cards">
                        <div className="card-head">Total Users</div>
                        <div className="card-body">0</div>
                    </div>
                    )}
                    
                    {students.length>0?(
                    <div className="cards">
                        <div className="card-head">Total Students</div>
                        <div className="card-body">{students.length}</div>
                    </div>
                    ):(
                    <div className="cards">
                        <div className="card-head">Total Students</div>
                        <div className="card-body">0</div>
                    </div>
                    )}

                    {courses.length>0?(
                    <div className="cards">
                        <div className="card-head">Total Courses</div>
                        <div className="card-body">{courses.length}</div>
                    </div>):(
                        <div className="cards">
                        <div className="card-head">Total Courses</div>
                        <div className="card-body">0</div>
                    </div>
                    )}

                  </div>
               </div>
              
              {/* Recent  Section */}
            <div className="recent-section-container">

                {/* RECENT ENROLLMENTS */}
                <div className="recent-enrollments">
                    {/* table-section-head */}
                    <div className="enrollments-table-section-head">
                        <div className="enrollments-table-section-head-left">
                            <h1 className="enrollments-table-section-head-left-h1">Recent Enrollments</h1>
                            <p>Latest student registrations for courses.</p>
                        </div>
                        <div className="enrollments-table-section-head-right">
                            <div onClick={()=>{navigate("/enrollments")}} className="recent-enroll-button">View All</div>
                        </div>
                    </div>

                    {/* table section */}
                    <div className="enrollments-table-section">
                        <div className="enrollments-table-section-container">

                            {/* table content */}
                            <div className="enrollments-table-content-container">
                                <div className="enrollments-table-content-head">
                                    <div>Enrollment ID</div>
                                    <div>Student Name</div>
                                    <div>Course Name</div>
                                    <div>Enrollment Date</div>
                                    <div>Status</div>
                                </div>
                                
                                {   
                                   Array.isArray(enrollments) &&enrollments.length>0?(
                                    enrollments.map((enrollment)=>(
                                            <div className="recent-enrollment-table-content" 
                                                key={enrollment.enrollment_id}>

                                                <div>{enrollment.enrollment_id}</div>
                                                <div>{enrollment.student_name}</div>
                                                <div>{enrollment.course_name}</div>
                                                <div>{enrollment.enrollment_date?.split("T")[0]}</div>
                                                <div>{enrollment.status}</div>
                                            </div>
                                    ))
                                ):(
                                    <div className="recent-enrollment-table-content">
                                        <div className="enrollments-table-content-body">No enrollments found</div>
                                    </div>
                                )
                                }

                            </div>
                        </div>
                    </div>
                </div>
                
            </div>

            </div>
        </>
    )
}