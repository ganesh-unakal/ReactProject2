import React, { useState } from "react";
import classes from "./UserForm.module.css";
import Card from "../UI/Card";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";
import Wrapper from "../Helpers/Wrapper";


const UserForm = (props) => {
  //02) after passing function 'useState'
  const [enteringNAme, userEnteredNAme] = useState("");
  const [enteringAge, userEnteredAge] = useState("");
  //09)this is useed for when the user enterd emplty values then it works 
  const [error, setError]=useState();

  //01) first we create function then it passed into 'onChange'value
  const UserNameHandler = (event) => {
    userEnteredNAme(event.target.value);
  };

  const AgeHandler = (event) => {
    userEnteredAge(event.target.value);
  };

  //03) Submit handler function to submit the whole form bt creating object
  const submitHandler = (event) => {
    event.preventDefault();
    //07) if the user ernters empty input then
    if (enteringNAme.trim().length === 0 || enteringAge.trim().length === 0) {
      setError({
        title: 'Invalid input',
        message: 'Please enter a valid name and age (non-empty values)'})
      return;
    }
    if (+enteringAge < 1) {
      setError({
        title: 'Invalid age',
        message: 'Please enter a valid age (> 0).'
      })
      return;
    }

    props.onAddUser(enteringNAme, enteringAge);  //09)console.log(enteringNAme, enteringAge);
    //04)  2 way binding:- this for the website is that the input forms still hold onto the old value so the solution.
    userEnteredNAme("");
    userEnteredAge("");
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
      value={enteringNAme}
      onChange={UserNameHandler}
    />

    <label htmlFor="age">Age (Year)</label>
    <input
      id="age"
      type="number"
      value={enteringAge}
      onChange={AgeHandler}
    />

    {/*06) adding Custom component element valled 'Button' */}
    <Button type="submit">Add User</Button>
  </form>
 
</Card>
    </Wrapper>
    
  );
};

export default UserForm;
