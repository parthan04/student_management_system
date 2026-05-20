import Course from "../pages/Courses"
import Sidebar from "../components/sidebar"

export default function CourseLayout() {
    return (
        <>
            <main className='main'>
                <div className='sidebar'>
                    <Sidebar />
                </div>
                <div className='dashboard'>
                    <Course />
                </div>
            </main>
        </>
    )
}
