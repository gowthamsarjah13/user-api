import React, {  useState } from "react";
import { useEffect } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";



function EditUser({setPerson,person}) {  



 const history = useHistory();
 
 const [name,setName]= useState("");
 const [uid,setUid]= useState();
 const [email,setEmail]= useState("");
 const [gender,setGender]= useState("");
 const [phone,setPhone]= useState("");
 const [qualification,setQualification]= useState("");

 const {id} = useParams();

  console.log(id)

  console.log(person)
 
  const selectedUser = person.find((per)=> per.id === id)
 
  console.log(selectedUser)

  useEffect(()=>{
   setName(selectedUser.name)
   setUid(selectedUser.id)
   setEmail(selectedUser.email)
   setGender(selectedUser.Gender)
   setPhone(selectedUser.phone)
   setQualification(selectedUser.qualification)
  },[])


 const addNew = async(id) =>{
    const newUser = {
        name,
        uid,
        email,
        gender,
        phone,
        qualification
    }

    // console.log()

//    try{
//        const response = await fetch(`https://645f79c67da4477ba957e18f.mockapi.io/users/${id}`,{
//         method: "PUT",
//         body : JSON.stringify(newUser),
//         headers: {
//           "Content-Type": "application/json"
//         } 
//        })

//        const data = response.json();
//        console.log(data)
//        setPerson()
//        history.push("/")
//    }
//    catch(error){
//     console.log(error);
//    }
    
 }

    return(
        <Form>
       
       <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" value={name} onChange={(e)=> setName(e.target.value)} placeholder="Enter name" />
        
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Id</Form.Label>
        <Form.Control type="number" value={uid} onChange={(e)=> setUid(e.target.value)} placeholder="Enter id" />
        
      </Form.Group> 

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" value={email} onChange={(e)=> setEmail(e.target.value)} placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Gender</Form.Label>
        <Form.Control type="text" value={gender} onChange={(e)=> setGender(e.target.value)} placeholder="Enter gender" />
      </Form.Group>
      
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Contact Number</Form.Label>
        <Form.Control type="text" value={phone} onChange={(e)=> setPhone(e.target.value)} placeholder="Enter mobile number" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Qualification</Form.Label>
        <Form.Control type="text" value={qualification} onChange={(e)=> setQualification(e.target.value)} placeholder="Enter qualification" />
      </Form.Group>

      <Button onClick={(e)=>{
            e.preventDefault();
            addNew(id);
      }}
       variant="primary" type="submit">
        Submit
      </Button>

    </Form>
    )
}




export default EditUser;