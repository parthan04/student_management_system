import Students from "../pages/Students"
import Sidebar from "../components/sidebar"

export default function StudentLayout() {
    return (
        <>
            <main className='main'>
                <div className='sidebar'>
                    <Sidebar />
                </div>
                <div className='dashboard'>
                    <Students />
                </div>
            </main>
        </>
    )
}
