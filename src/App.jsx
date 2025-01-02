import React, { useContext, useEffect, useState } from 'react'
import Login from './components/Auth/login'
import EmployeeDash from './components/Dashboard/EmployeeDash'
import AdminDash from './components/Dashboard/AdminDash'
import { getLocalStorage, setLocalStorage } from './utils/localstorage'
import { AuthContext } from './context/AuthProvider'
import { data } from 'autoprefixer'


const App = () => {

  const [user , setUser] = useState(null);
  const [loggedInUser , setLoggedInUser] = useState(null);
  const authdata = useContext(AuthContext);
  console.log(authdata)

  // this is correct ..

  // useEffect(()=>{
  //   if(authdata){
  //     const loggedInUser = localStorage.getItem("loggedInUser")
  //     if(loggedInUser){
  //       const parsedUser = JSON.parse(loggedInUser); // Parse the string to an object
  //       setUser(parsedUser.role); // Set the role from the parsed user object

  //       // setUser((loggedInUser.role));
  //     }
  //   }
  // },[authdata])

useEffect(function(){
  const loggedInUser = localStorage.getItem("loggedInUser");
  console.log("logged in user",loggedInUser);
  if(loggedInUser){
    const parsedUser = JSON.parse(loggedInUser);
    console.log(parsedUser)
    setUser(parsedUser.role)
    setLoggedInUser(parsedUser.data)
  }
},[])



console.log(user)


  function handlelogin(email , password){

    console.log("email entered",email);
    console.log("password",password);

    if(email == "admin@example.com" && password == "admin123"){
      console.log("this is admin ");
      setUser('admin');
      localStorage.setItem('loggedInUser' , JSON.stringify({role:'admin'}))
    }
    // else if (email == "user1@example.com" && password == "123"){
    //   console.log("this is user");
    //   setUser('employee');
    // }
    else if(authdata){
      console.log("yha pr ",authdata)
      const emp = authdata.userData.employees.find((e)=>e.email == email && e.password == password)
      if(emp){
      setUser('employee')
      setLoggedInUser(emp);
      localStorage.setItem('loggedInUser' , JSON.stringify({role:'employee' , data:emp}))
    }
  }
    else{
        alert("Invalid user");
    }
  }

  // useEffect(()=>{
  //   // setLocalStorage()
  //   getLocalStorage()
  // },)


  return (
    <>
    { !user ? <Login handlelogin={handlelogin}/> : ""}
    {user == "admin" ? <AdminDash changeUser={setUser}/>: ( user == 'employee' ? <EmployeeDash changeUser={setUser} data={loggedInUser}/> : null)}    
    </>
  )
}

export default App
