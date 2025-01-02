// import React from 'react'

// const Login = () => {
//   return (
//     <div className='flex items-center justify-content h-screen'>
//         <div className='border-2 border-red-600'>
//         <form className='flex flex-col items-center'>

//             <input type="email" placeholder='Type your email'/>
//             <input type="text" placeholder='Enter your name'/>

//         </form>
//         </div>
      
//     </div>
//   )
// }

// export default Login
import React, { useState } from 'react';

const Login = ({handlelogin}) => {

    const[email , setEmail] = useState('');
    const [password , setPassword] = useState('');

    
    function submitHandler(e){
        e.preventDefault();
        handlelogin(email , password);

        // console.log("form submitted")
        // console.log("email",email);
        // console.log("password",password);

        setEmail("");
        setPassword("");
    }

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="border-2 border-red-500 p-4 rounded">
        <form onSubmit={(e)=>submitHandler(e)} className="flex flex-col items-center gap-4">
          <input
            required 
            value = {email}
            onChange = {(e)=>setEmail(e.target.value)}
            type="email"
            placeholder="Type your email"
            className="border border-gray-300 p-2 rounded w-64 bg-neutral-800"
          />
          <input
            required
            value = {password}
            onChange={(e)=>setPassword(e.target.value)}
            type="password"
            placeholder="Enter your Password"
            className="border border-gray-300 p-2 rounded w-64 bg-neutral-800"
          />
          <button className="bg-red-600 text-white p-2 rounded w-64 mt-4 ">
            Log in 
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
