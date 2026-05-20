import Dashboard from "../pages/Dashboard"
import Sidebar from "../components/sidebar"

export default function MainLayout() {
    return (
        <>
            <main className='main'>
                <div className='sidebar'>
                    <Sidebar />
                </div>
                <div className='dashboard'>
                    <Dashboard />
                </div>
            </main>
        </>
    )
}
