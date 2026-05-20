import {
    useEffect,
    useState
}
from "react";

import {getAllUsers} from "../services/userService"
import { deleteUser } from "../services/userService";

import UserForm from "../form/userForm"

export default function Users(){

    const[users,setUsers]=useState([]);
    const[showModal,setShowModal]=useState(false);
    const[editUser,setEditUser]=useState(null);

    useEffect(()=>{
        fetchUsers();
    },[])

    const fetchUsers=async()=>{
        try{
            const response = await getAllUsers();
            console.log("response",response)
            setUsers(response.data)
        }catch(err){
            console.log(err)
        }
    }
    
    const handleDelete = async(id)=>{
        try{
            const response = await deleteUser(id)
            console.log(response.data)
            fetchUsers();
        }catch(err){
            console.log(err)
        }
    }

    return(
        <>       
        <div className="users-container">

            {/* TOP HEAD */}
            <div className="user-container-head">
                <div className="user-container-head-left">
                    <h1>Users</h1>
                    <p>Manage your users</p>
                </div>
                <div className="user-container-head-right">
                    <button className="button" 
                       onClick={()=>{
                        setShowModal(true)
                        setEditUser(null)
                        }}
                    >
                        Add User
                    </button>
                    <UserForm 
                       showModal={showModal} 
                       setShowModal={setShowModal} 
                       fetchUsers={fetchUsers}
                       editUser={editUser}
                    />
                </div>
            </div>

            {/* table container */}
            <div className="user-table-container">

                <div className="user-table-container-body">

                    <div className="user-table">

                        <div className="user-table-container-body-head">
                            <div className="user-name row">User</div>
                            <div className="user-id row">ID</div>
                            <div className="user-role row">Role</div>
                            <div className="user-actions row">Actions</div>
                        </div>
                        
                        {
                            Array.isArray(users) && users.length > 0 ? (
                               users.map((user)=>(
                                <div className="user-table-container-body-content" key={user.user_id}>
                                    <div className="user-name row">{user.name}</div>
                                    <div className="user-id row">{user.user_id}</div>
                                    <div className="user-role row">{user.role}</div>
                                    <div className="user-actions row">
                                        <button className="user-edit-button" 
                                        onClick={()=>{
                                            setShowModal(true);
                                            setEditUser(user);
                                            }}
                                        >
                                            <img src="/images/pencil.svg" alt="edit" />
                                        </button>

                                        <button className="user-delete-button" 
                                           onClick={()=>{
                                            handleDelete(user.user_id)
                                           }}
                                        >
                                            <img src="/images/trash.svg" alt="delete" />
                                        </button>
                                    </div>
                                </div>
                               ))                                
                            ):(
                                <div className="user-table-container-body-content">
                                    <div className="user-name row">No users found</div>
                                </div>
                            )
                        }

                    </div>

                </div>

            </div>
        </div>
        </>
    )
}