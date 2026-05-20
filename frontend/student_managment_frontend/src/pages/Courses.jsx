import {
    useEffect,
    useState
}
from "react";

import {getCourse} from "../services/courseService"
import {deleteCourse} from "../services/courseService"

import CourseForm from "../form/courseForm"; 

export default function Courses(){

    const[courses,setCourses]=useState([]);
    const[showModal,setShowModal]=useState(false);
    const[editCourse,setEditCourse]=useState(null);

    useEffect(()=>{
        fetchCourses();
    },[])

    const fetchCourses=async()=>{
        try{
            const response = await getCourse();
            console.log("response",response)
            setCourses(response.data.data)
        }catch(err){
            console.log(err)
        }
    }

    const handleDelete=async(id)=>{
        try{
            const response = await deleteCourse(id)
            console.log(response.data)
            fetchCourses()
        }catch(err){
            console.log(err)
        }
    }

    return(
        <>       
        <div className="courses-container">
            <div className="courses-container-head">
                <div className="courses-container-head-left">
                    <h1>Courses</h1>
                    <p>Manage academic programs and classes.</p>
                </div>
                <div className="courses-container-head-right">
                    <button className="button" 
                        onClick={() => {
                            setShowModal(true);
                            setEditCourse(null);
                        }}
                    >
                        Add Course
                    </button>
                    <CourseForm
                        showModal={showModal}
                        setShowModal={setShowModal}
                        fetchCourses={fetchCourses}
                        editCourse={editCourse}
                    />
                </div>
            </div>

            <div className="courses-table-container">
                <div className="courses-table-container-body">
                    <div className="courses-table">
                        <div className="courses-table-container-body-head">
                            <div className="course-name row">Course</div>
                            <div className="course-id row">ID</div>
                            <div className="course-duration row">Duration</div>
                            <div className="course-fees row">Fees</div>
                            <div className="course-actions row">Actions</div>
                        </div>
                        {Array.isArray(courses) && courses.length > 0 ? (
                            courses.map((course) => (
                                <div className="courses-table-container-body-content" key={course.course_id}>
                                    <div className="course-name row">{course.course_name}</div>
                                    <div className="course-id row">{course.course_id}</div>
                                    <div className="course-duration row">{course.duration}</div>
                                    <div className="course-fees row">{course.fees}</div>
                                    <div className="course-actions row">
                                        <button
                                            className="course-edit-button"
                                            onClick={() => {
                                                setShowModal(true);
                                                setEditCourse(course);
                                            }}
                                        >
                                            <img src="/images/pencil.svg" alt="edit" />
                                        </button>
                                        <button
                                            className="course-delete-button"
                                            onClick={() => handleDelete(course.course_id)}
                                        >
                                            <img src="/images/trash.svg" alt="delete" />
                                        </button>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <div className="courses-table-container-body-content">
                                <div className="course-name row">No courses found</div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}