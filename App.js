//import logo from './logo.svg';
import React, { useState ,Fragment } from "react";
import "./App.css";
import UserForm from "./Components/User/UserForm";
import UserList from "./Components/User/UserList";

function App() {
  const [usersList, setUserList] = useState([]);

  const addUserHandler = (uNmae, uAge) => {
    //its takes the 'console.log(enteringNAme, enteringAge);'
    setUserList((prevUsersList) => {
      // it takes old data list
      return [...prevUsersList, { name: uNmae, age: uAge, id:Math.random().toString() }];
    });
  };

  return (
    <Fragment>
      <UserForm onAddUser={addUserHandler} />
      <UserList users={usersList} />
    </Fragment>
  );
}

export default App;
