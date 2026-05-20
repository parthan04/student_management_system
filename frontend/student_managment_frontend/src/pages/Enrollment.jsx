import {
    useEffect,
    useState
}
from "react";

import {getAllEnrollment,deleteEnrollment} from "../services/enrollmentService"

import EnrollmentForm from "../form/enrollmentForm"

export default function Enrollments(){

    const[enrollments,setEnrollments]=useState([]);
    const[showModal,setShowModal]=useState(false);
    const[editEnrollment,setEditEnrollment]=useState(null);

    useEffect(()=>{
        fetchEnrollments();
    },[])

    const fetchEnrollments=async()=>{
        try{
            const response=await getAllEnrollment();
            console.log("response",response.data)
            setEnrollments(response.data.data);
        }
        catch(err){
            console.log(err);
        }
    }

    const handleDeleteEnrollment=async(id)=>{
        try{
            const response=await deleteEnrollment(id);
            console.log("response",response.data)
            fetchEnrollments();
        }
        catch(err){
            console.log(err);
        }
    }

    return(
        <>       
             {/* TOP HEAD */}
            <div className="enrollment-container-head">
                <div className="enrollment-container-head-left">
                    <h1>Enrollments</h1>
                    <p>Manage enrollments records and information</p>
                </div>
                <div className="enrollment-container-head-right">
                    <button className="button" 
                        onClick={()=>{
                            setShowModal(true)
                            setEditEnrollment(null)
                        }}
                    >
                        Add Enrollment
                    </button>  
                    <EnrollmentForm
                        showModal={showModal}
                        setShowModal={setShowModal}
                        fetchEnrollments={fetchEnrollments}
                        editEnrollment={editEnrollment}
                    /> 
                </div>
            </div> 

            {/* table container */}
            <div className="enrollment-table-container">

                <div className="enrollment-table-container-body">

                    <div className="enrollment-table">

                        <div className="enrollment-table-container-body-head">
                            <div className="enrollment-name row">Enrollment ID</div>
                            <div className="enrollment-id row">Student Name</div>
                            <div className="enrollment-actions row">Course Name</div>
                            <div className="enrollment-actions row">Enrollment Date</div>
                            <div className="enrollment-actions row">Status</div>
                            <div className="enrollment-actions row">Actions</div>
                        </div>

                        {Array.isArray(enrollments)&&enrollments.length>0?(
                            enrollments.map((enrollment)=>(
                                <div className="enrollment-table-container-body-content" key={enrollment.enrollment_id}>
                                    <div className="enrollment-name row">{enrollment.enrollment_id}</div>
                                    <div className="enrollment-id row">{enrollment.student_name}</div>
                                    <div className="enrollment-course_name row">{enrollment.course_name}</div>
                                    <div className="enrollment-date row">{enrollment.enrollment_date?.split("T")[0]}</div>
                                    <div className={`status ${enrollment.status}`}>{enrollment.status}</div>
                                    <div className="enrollment-actions row">
                                        <button className="enrollment-edit-button" 
                                          onClick={()=>{
                                            setShowModal(true)
                                            setEditEnrollment(enrollment)
                                          }}
                                        >
                                            <img src="/images/pencil.svg" alt="edit" />
                                        </button>

                                        <button className="user-delete-button" 
                                            onClick={()=>{
                                                handleDeleteEnrollment(enrollment.enrollment_id)
                                            }}
                                        >
                                            <img src="/images/trash.svg" alt="delete" />
                                        </button>
                                    </div>
                                </div>
                            ))
                        ):(
                            <div className="no-data">
                                <span>No Student Data Found.</span>
                            </div>
                        )}

                    </div>

                </div>

            </div>
        </>
    )
}