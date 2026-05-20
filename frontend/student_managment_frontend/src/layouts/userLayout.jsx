import Users from "../pages/Users"
import Sidebar from "../components/sidebar"

export default function UserLayout() {
    return (
        <>
            <main className='main'>
                <div className='sidebar'>
                    <Sidebar />
                </div>
                <div className='dashboard'>
                    <Users />
                </div>
            </main>
        </>
    )
}
