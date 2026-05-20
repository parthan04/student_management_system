import {

    useState,

    useEffect

}

from "react";


import {

    createUser,

    updateUser

}

from "../services/userService";


export default function UserForm({

    showModal,

    setShowModal,

    fetchUsers,

    editUser

}){


    const [name,setName] =
    useState("");

    const [email,setEmail] =
    useState("");

    const [password,setPassword] =
    useState("");

    const [role,setRole] =
    useState("");


    // ===== PREFILL FORM =====

    useEffect(()=>{

        if(editUser){

            setName(editUser.name);

            setEmail(editUser.email);

            setPassword(editUser.password);

            setRole(editUser.role);

        }

        else{

            setName("");

            setEmail("");

            setPassword("");

            setRole("");

        }

    },[editUser]);


    // ===== CLOSE MODAL =====

    if(!showModal)
    return null;


    // ===== SUBMIT =====

    const handleSubmit =
    async(e)=>{

        e.preventDefault();

        try{

            const data = {

                name,
                email,
                password,
                role

            };


            // ===== UPDATE =====

            if(editUser){

                await updateUser(

                    editUser.user_id,

                    data

                );

                alert(
                    "User updated successfully"
                );

            }


            // ===== CREATE =====

            else{

                await createUser(data);

                alert(
                    "User added successfully"
                );

            }


            // ===== REFRESH TABLE =====

            fetchUsers();


            // ===== CLOSE MODAL =====

            setShowModal(false);


            // ===== CLEAR FORM =====

            setName("");

            setEmail("");

            setPassword("");

            setRole("");

        }

        catch(err){

            console.log(err);

        }

    };


    return(

        <div className="modal-overlay">

            <div className="modal-container">


                {/* ===== HEADER ===== */}

                <div className="modal-header">

                    <h2>

                        {

                        editUser

                        ?

                        "Update User"

                        :

                        "Add User"

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

                    placeholder="Enter Name"

                    value={name}

                    onChange={(e)=>
                    setName(e.target.value)
                    }

                    required

                    />


                    <br /><br />


                    <input

                    type="email"

                    placeholder="Enter Email"

                    value={email}

                    onChange={(e)=>
                    setEmail(e.target.value)
                    }

                    required

                    />


                    <br /><br />


                    <input

                    type="text"

                    placeholder="Enter Password"

                    value={password}

                    onChange={(e)=>
                    setPassword(e.target.value)
                    }

                    required

                    />


                    <br /><br />


                    <select

                    value={role}

                    onChange={(e)=>
                    setRole(e.target.value)
                    }

                    required

                    >

                        <option value="">
                            Select Role
                        </option>

                        <option value="admin">
                            Admin
                        </option>

                        <option value="student">
                            Student
                        </option>

                    </select>


                    <br /><br />


                    <button type="submit">

                        {

                        editUser

                        ?

                        "Update User"

                        :

                        "Add User"

                        }

                    </button>

                </form>

            </div>

        </div>

    );

}