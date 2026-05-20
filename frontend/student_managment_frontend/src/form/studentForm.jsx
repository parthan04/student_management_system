import {

    useState,

    useEffect

}

from "react";


import {

    createStudent,
    updateStudent,
}

from "../services/studentService";

export default function StudentForm({

    showModal,

    setShowModal,

    fetchStudents,

    editStudent,

}){


    const [student_name,setStudent_name] =
    useState("");

    const [age,setAge] =
    useState("");

    const [gender,setGender] =
    useState("");

    const [address,setAddress] =
    useState("");

    const [phone,setPhone] =
    useState("");

    // ===== PREFILL FORM =====

    useEffect(()=>{

        if(editStudent){

            setStudent_name(editStudent.student_name);
            setAge(editStudent.age);
            setGender(editStudent.gender);
            setAddress(editStudent.address);
            setPhone(editStudent.phone);

        }

        else{
            setStudent_name("");
            setAge("");
            setGender("");
            setAddress("");
            setPhone("");
        }

    },[editStudent]);
     

    // ===== SUBMIT =====

    const handleSubmit =
    async(e)=>{

        e.preventDefault();

        try{

            const data = {
                
                student_name,
                age,
                gender,
                address,
                phone

            };


            // ===== UPDATE =====

            if(editStudent){

                await updateStudent(

                    editStudent.student_id,

                    data

                );

                alert(
                    "Student updated successfully"
                );

            }


            // ===== CREATE =====

            else{

                await createStudent(data);

                alert(
                    "Student added successfully"
                );

            }


            // ===== REFRESH TABLE =====

            fetchStudents();


            // ===== CLOSE MODAL =====

            setShowModal(false);


            // ===== CLEAR FORM =====
            setStudent_name("");
            setAge("");
            setGender("");
            setAddress("");
            setPhone("");

        }

        catch(err){

            console.error("Submit error:", err.response?.data || err.message);
            alert("Something went wrong. Please try again.");

        }

    };


    // ===== CLOSE MODAL =====

    if(!showModal)
    return null;


    return(

        <div className="modal-overlay">

            <div className="modal-container">


                {/* ===== HEADER ===== */}

                <div className="modal-header">

                    <h2>

                        {

                        editStudent

                        ?

                        "Update Student"

                        :

                        "Add Student"

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

                    placeholder="Enter The Student Name"

                    value={student_name}

                    onChange={(e)=>
                    setStudent_name(e.target.value)
                    }

                    required

                    />

                    <br /><br />

                    <input

                    type="number"

                    placeholder="Enter Your Age"

                    value={age}

                    onChange={(e)=>
                    setAge(e.target.value)
                    }

                    required

                    />


                    <br /><br />


                    <input

                    type="text"

                    placeholder="Enter Address"

                    value={address}

                    onChange={(e)=>
                    setAddress(e.target.value)
                    }

                    required

                    />


                    <br /><br />


                    <input

                    type="number"

                    placeholder="Enter Phone Number"

                    value={phone}

                    onChange={(e)=>
                    setPhone(e.target.value)
                    }

                    required

                    />


                    <br /><br />


                    <select

                    value={gender}

                    onChange={(e)=>
                    setGender(e.target.value)
                    }

                    required

                    >

                        <option value="">
                            Select Gender
                        </option>

                        <option value="male">
                            Male
                        </option>

                        <option value="female">
                            Female
                        </option>

                        <option value="other">
                            Other
                        </option>

                    </select>


                    <br /><br />


                    <button type="submit">

                        {

                        editStudent

                        ?

                        "Update Student"

                        :

                        "Add Student"

                        }

                    </button>

                </form>

            </div>

        </div>

    );

}