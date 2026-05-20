import { useEffect,useState } from "react"

import { getStudents } from "../services/studentService"
import { deleteStudent } from "../services/studentService"

import StudentForm from "../form/studentForm"

export default function Student(){

    const[students,setStudents]=useState([]);
    const[showModal,setShowModal]=useState(false);
    const[editStudent,setEditStudent]=useState(null);


    useEffect(()=>{
        fetchStudents();
    },[]);


    const fetchStudents= async()=>{
            try{
                const response=await getStudents();
                console.log("response",response.data)
                setStudents(response.data.data);
            }
            catch(err){
                console.log(err);
            }
    }

    const handleDeleteStudent=async(id)=>{
       try{
        const response=await deleteStudent(id);
        console.log("response",response.data)
        fetchStudents();
       }
       catch(err){
        console.log(err);
       }
    }

    return(
        <>
           {/* TOP HEAD */}
            <div className="student-container-head">
                <div className="student-container-head-left">
                    <h1>Students</h1>
                    <p>Manage student records and information</p>
                </div>
                <div className="student-container-head-right">
                    <button className="button" 
                        onClick={()=>{
                            setShowModal(true)
                            setEditStudent(null)
                        }}
                    >
                        Add Student
                    </button>  
                    <StudentForm
                        showModal={showModal}
                        setShowModal={setShowModal}
                        fetchStudents={fetchStudents}
                        editStudent={editStudent}
                    /> 
                </div>
            </div> 

            {/* table container */}
            <div className="student-table-container">

                <div className="student-table-container-body">

                    <div className="student-table">

                        <div className="student-table-container-body-head">
                            <div className="student-name row">Student Name</div>
                            <div className="student-id row">Student ID</div>
                            <div className="student-actions row">Phone No</div>
                            <div className="student-actions row">Age/Gender</div>
                            <div className="student-actions row">Address</div>
                            <div className="student-actions row">Actions</div>
                        </div>

                        {Array.isArray(students)&&students.length>0?(
                            students.map((student)=>(
                                <div className="student-table-container-body-content" key={student.student_id}>
                                    <div className="student-name row">{student.student_name}</div>
                                    <div className="student-id row">{student.student_id}</div>
                                    <div className="student-role row">{student.phone}</div>
                                    <div className="student-role row">{student.age}/{student.gender}</div>
                                    <div className="student-role row">{student.address}</div>
                                    <div className="student-actions row">
                                        <button className="student-edit-button" 
                                          onClick={()=>{
                                            setShowModal(true)
                                            setEditStudent(student)
                                          }}
                                        >
                                            <img src="/images/pencil.svg" alt="edit" />
                                        </button>

                                        <button className="user-delete-button" 
                                            onClick={()=>{
                                                handleDeleteStudent(student.student_id)
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