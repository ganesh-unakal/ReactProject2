import React, { useState, useRef } from "react";
import classes from "./UserForm.module.css";
import Card from "../UI/Card";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";
import Wrapper from "../Helpers/Wrapper";


const UserForm = (props) => {

  const nameInputRef=useRef();
  const ageInputRef = useRef();
  const collegeRef=useRef();
 
  //09)this is useed for when the user enterd emplty values then it works 
  const [error, setError]=useState(); 

  //03) Submit handler function to submit the whole form bt creating object
  const submitHandler = (event) => {
    event.preventDefault();
    const enteredName=nameInputRef.current.value
    const enteredAge=ageInputRef.current.value
    const enteredCollege=collegeRef.current.value

    //07) if the user ernters empty input then
    if (enteredName.trim().length === 0 || enteredAge.trim().length === 0) {
      setError({
        title: 'Invalid input',
        message: 'Please enter a valid name and age (non-empty values)'})
      return;
    }
    if (+enteredAge < 1) {
      setError({
        title: 'Invalid age',
        message: 'Please enter a valid age (> 0).'
      })
      return;
    }

    props.onAddUser(enteredName, enteredAge ,enteredCollege);  //09)console.log(enteringNAme, enteringAge);
    nameInputRef.current.value='';
    ageInputRef.current.value='';
    collegeRef.current.value='';
  };

  const errorHandler =()=>{
    setError(null)
  }

  return (
    <Wrapper>
      {/*08)we display error error handle message*/}
      {error && (
      <ErrorModal
      title={error.title} 
      message={error.message} 
      onConfirm={errorHandler}
      />)}

 {/*05) card is used for UI*/}
<Card className={classes.input}>
  <form onSubmit={submitHandler}>
    <label htmlFor="username">UserName</label>
    <input
      id="username"
      type="text"
      ref={nameInputRef}
    />

    <label htmlFor="age">Age (Year)</label>
    <input
      id="age"
      type="number"
      ref={ageInputRef}
    />

    <label htmlFor="college">College Name</label>
    <input 
    id="college"
    type='text'
    ref={collegeRef}
    />

    {/*06) adding Custom component element valled 'Button' */}
    <Button type="submit">Add User</Button>
  </form>
 
</Card>
    </Wrapper>
    
  );
};

export default UserForm;
