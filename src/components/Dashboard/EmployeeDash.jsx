import React from 'react'
import Header from '../others/Header'
import TaskListNum from '../others/TaskListNum'
import TaskList from '../TaskList/TaskList'

const EmployeeDash = ({data , changeUser}) => {
  console.log(data);
  console.log(changeUser)
  return (
    <div className='p-10 bg-[#1C1C1C] h-screen'>
         <Header changeUser={changeUser} data={data}/>
         <TaskListNum data={data}/>
         <TaskList data={data}/>
      <h2>Employee Dashboard hoon</h2>
    </div>
  )
}

export default EmployeeDash
