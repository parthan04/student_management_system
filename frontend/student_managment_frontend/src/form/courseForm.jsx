import {useEffect,useState} from "react"

import {createCourse,updateCourse} from "../services/courseService"

export default function CourseForm({showModal,setShowModal,fetchCourses,editCourse}){

        const[course_name,setCourseName]=useState("")
        const[duration,setDuration]=useState("")
        const[fees,setFees]=useState("")

        useEffect(()=>{
            if(editCourse){
                setCourseName(editCourse.course_name)
                setDuration(editCourse.duration)
                setFees(editCourse.fees)
            }
            else{
                setCourseName("")
                setDuration("")
                setFees("")
            }
        },[editCourse])

        if(!showModal) return null;

        const handleSubmit = async(e)=>{
            e.preventDefault();
            try{
                const data={
                    course_name,
                    duration,
                    fees
                };

                if(editCourse){
                    await updateCourse(editCourse.course_id,data)
                    alert("Course Updated Successfully")
                } else {
                    await createCourse(data)
                    alert("Course Created Successfully")
                }

                fetchCourses()
                setShowModal(false)

                setCourseName("");
                setDuration("");
                setFees("");

            } catch(err){
                console.log(err)
            }
        }

    return(
        <div className="modal-overlay">

            <div className="modal-container">


                {/* ===== HEADER ===== */}

                <div className="modal-header">

                    <h2>

                        {

                        editCourse

                        ?

                        "Update Course"

                        :

                        "Add Course"

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


                {/* ===== FORM ===== */}

                <form
                onSubmit={handleSubmit}>


                    <input

                    type="text"

                    placeholder="Enter Course Name"

                    value={course_name}

                    onChange={(e)=>
                    setCourseName(e.target.value)
                    }

                    required

                    />


                    <br /><br />


                    <input

                    type="number"

                    placeholder="Enter Duration (Months)"

                    value={duration}

                    onChange={(e)=>
                    setDuration(e.target.value)
                    }

                    required

                    />


                    <br /><br />


                    <input

                    type="float"

                    placeholder="Enter Fees"

                    value={fees}

                    onChange={(e)=>
                    setFees(e.target.value)
                    }

                    required

                    />


                    <br /><br />



                    <button type="submit">

                        {

                        editCourse

                        ?

                        "Update Course"

                        :

                        "Add Course"

                        }

                    </button>

                </form>

            </div>

        </div>

    )
}