import Enrollments from "../pages/Enrollment"
import Sidebar from "../components/sidebar"

export default function EnrollmentLayout() {
    return (
        <>
            <main className='main'>
                <div className='sidebar'>
                    <Sidebar />
                </div>
                <div className='dashboard'>
                    <Enrollments />
                </div>
            </main>
        </>
    )
}
