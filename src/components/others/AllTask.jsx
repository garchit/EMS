import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider';

const AllTask = () => {
    const authdat = useContext(AuthContext);
    console.log(authdat)
    return (
        <div className='bg-[#1c1c1c] p-5  mt-5 h-50 '>
            <div className='bg-blue-700 py-2 px-4 flex rounded-xl mt-5 justify-between'>
                <h2 className='text-lg font-meduim w-1/5 text-white-700'>Employee Name</h2>
                <h3 className='text-lg font-meduim w-1/5 text-white-700'>New Task</h3>
                <h3 className='text-lg font-meduim w-1/5 text-white-700'>Active Task</h3>
                <h3 className='text-lg font-meduim w-1/5 text-white-700'>Failed task</h3>
                <h3 className='text-lg font-meduim w-1/5 text-white-700'>Completed Task</h3>
            </div>
            <div className='overflow-auto h-[80%]'>
            {authdat.userData.employees.map(function(emp , idx){
                return <div key={idx} className='bg-orange-300 py-2 px-4 flex rounded-xl mt-5 justify-between'>
                <h2 className='text-lg font-meduim w-1/5 text-black'>{emp.name}</h2>
                <h3 className='text-lg font-meduim w-1/5 text-grey-300'>{emp.taskNumbers.newTasks}</h3>
                <h3 className='text-lg font-meduim w-1/5 text-purple-700'>{emp.taskNumbers.activeTasks}</h3>
                <h3 className='text-lg font-meduim w-1/5 text-yellow-900'>{emp.taskNumbers.failedTasks}</h3>
                <h3 className='text-lg font-meduim w-1/5 text-green-700'>{emp.taskNumbers.completedTasks}</h3>
            </div>
            })}
            </div>
            
            
       </div>
    )
}

export default AllTask
