import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import {updateUser} from'../store/reducer';

function Update() {

    let users=useSelector((state)=>state.users);
    const {id}=useParams();
    let uid=parseInt(id)
    let existingUser=users.filter((user)=>user.id=== uid);
   
    const {name,email}=existingUser[0]
   
    const[updateName, setUpdateName] = useState(name);
    const[updateEmail, setUpdateEmail] = useState(email);

    let dispatch=useDispatch();
    let navigate=useNavigate();

   
    let updateHandler =(e) =>{
        e.preventDefault();
        dispatch(updateUser({
            id:id,
            name:updateName,
            email:updateEmail
        }));
        navigate("/")
    }

  return (
    <div>
        <h1>Update User</h1>
        <form onSubmit={updateHandler}>
            
            <label htmlFor="name">Name : </label>
            <input type="text" name="name" value={updateName} onChange={(e) => setUpdateName(e.target.value)}/> 
            <br/>
            <label htmlFor="email">Email : </label>
            <input type="email" name="email" value={updateEmail} onChange={(e) => setUpdateEmail(e.target.value)}/>

            <button type='submit'>SUBMIT</button>

        </form>
    </div>
  )
}

export default Update
