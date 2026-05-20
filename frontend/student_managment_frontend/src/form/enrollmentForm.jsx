import { useEffect,useState } from "react"

import {createEnrollment,updateEnrollment} from "../services/enrollmentService"
import {getStudents} from "../services/studentService"
import {getCourse} from "../services/courseService"

export default function EnrollmentForm({showModal,setShowModal,fetchEnrollments,editEnrollment}){
    
    const [students, setStudents] = useState([]);
    const [courses, setCourses] = useState([]);

    const [student_id, setStudentId] = useState("");
    const [course_id, setCourseId] = useState("");

    const [status, setStatus] = useState("active");
    
    
    const fetchStudents=async()=>{
        const response=await getStudents();
        setStudents(response.data.data);
    }
    
    const fetchCourses=async()=>{
        const response=await getCourse();
        setCourses(response.data.data);
    }
    
    useEffect(()=>{
        fetchStudents();
        fetchCourses();
    },[])
    useEffect(()=>{

        if(editEnrollment){

            setStudentId(editEnrollment.student_id);
            setCourseId(editEnrollment.course_id);
            setStatus(editEnrollment.status);

        }

        else{

            setStudentId("");
            setCourseId("");
            setStatus("");

        }

    },[editEnrollment]);


    // ===== CLOSE MODAL =====

    if(!showModal) return null;
    const handleSubmit=async(e)=>{
        e.preventDefault();

        try{
             const data={
                student_id,
                course_id,
                status
             };

             if(editEnrollment){
                await updateEnrollment(editEnrollment.enrollment_id,data);
                alert("Student Enrollment Updated")
             }else{
                await createEnrollment(data);
                alert("Student Enrollment Completed")
             }
             
             fetchEnrollments();             
             setShowModal(false);

             setStudentId("");
             setCourseId("");
             setStatus("");

        }catch(err){
               console.log(err);
               alert("enrollment not created",err)
        }
    }

    return(
        <>
        <div className="modal-overlay">

            <div className="modal-container">

                <div className="modal-header">

                    <h2>
                        {
                            editEnrollment
                            ?"Update Enrollment"
                            :"Add Enrollment"
                        }
                    </h2>
                                     <button

                    onClick={()=>
                    setShowModal(false)
                    }

                    >

                        X

                    </button>
                </div>

                <form onSubmit={handleSubmit}>


                    {/* STUDENT */}

                    <select

                    value={student_id}

                    onChange={(e)=>
                    setStudentId(e.target.value)
                    }

                    required

                    >

                        <option value="">
                            Select Student
                        </option>

                        {
                            students.map((student)=>(

                                <option

                                key={student.student_id}

                                value={student.student_id}

                                >

                                    {student.student_name}

                                </option>

                            ))
                        }

                    </select>

                    <br /><br />


                    {/* COURSE */}

                    <select

                    value={course_id}

                    onChange={(e)=>
                    setCourseId(e.target.value)
                    }

                    required

                    >

                        <option value="">
                            Select Course
                        </option>

                        {
                            courses.map((course)=>(

                                <option

                                key={course.course_id}

                                value={course.course_id}

                                >

                                    {course.course_name}

                                </option>

                            ))
                        }

                    </select>

                    <br /><br />


                    {/* STATUS */}

                    <select

                    value={status}

                    onChange={(e)=>
                    setStatus(e.target.value)
                    }

                    >

                        <option value="active">
                            Active
                        </option>

                        <option value="completed">
                            Completed
                        </option>

                        <option value="dropped">
                            Dropped
                        </option>

                    </select>

                    <br /><br />


                    <button type="submit">

                        {editEnrollment?"Update Enrollment":"Add Enrollment"}

                    </button>

                </form>

            </div>

        </div>

        </>
    )
}