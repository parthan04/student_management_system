import { NavLink } from "react-router-dom";

export default function Sidebar() {
    return (
        <>
            <aside className='sidebar-container'>

                <div className="nav-container">

                    <div className="nav-head">
                        <h2>EduTrack</h2>
                    </div>

                    <div className="nav-item-container">
                        <nav className="nav-items">
                            <div className="nav-links">
                                <NavLink to="/" className="{({isActice})=>isActice ? 'active' :''}">Dashboard</NavLink>
                            </div>
                            <div className="nav-links {({isActice})=>isActice ? 'active' :''}">
                                <NavLink to="/users" className="{({isActice})=>isActice ? 'active' :''}"> Users</NavLink>
                            </div>
                            <div className="nav-links {({isActice})=>isActice ? 'active' :''}">
                                <NavLink to="/students" className="{({isActice})=>isActice ? 'active' :''}">Students</NavLink>
                            </div>
                            <div className="nav-links {({isActice})=>isActice ? 'active' :''}">
                                <NavLink to="/courses" className="{({isActice})=>isActice ? 'active' :''}">Courses</NavLink>
                            </div>
                            <div className="nav-links {({isActice})=>isActice ? 'active' :''}">
                                <NavLink to="/enrollments" className="{({isActice})=>isActice ? 'active' :''}">Enrollments</NavLink>
                            </div>
                        </nav>
                    </div>

                </div>

            </aside>
        </>
    )
}