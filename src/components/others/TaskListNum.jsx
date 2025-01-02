import React from 'react'

const TaskListNum = ({data}) => {
    console.log(data)
  return (
    <div className='flex mt-7 justify-between gap-7 screen '>
        <div className='rounded-2xl w-[45%] py-5 px-5 bg-red-400'>
            <h2 className='text-3xl font-semibold'>{data.taskNumbers.newTasks}</h2>
            <h3 className='text-xl font-meduim'>NEW TASK </h3>
        </div>

        <div className='rounded-2xl w-[45%] py-5 px-5 bg-green-400'>
            <h2 className='text-3xl font-semibold'>{data.taskNumbers.completedTasks}</h2>
            <h3 className='text-xl font-meduim'>Completed TASK </h3>
        </div>

        <div className='rounded-2xl w-[45%] py-5 px-5 bg-blue-400'>
            <h2 className='text-3xl font-semibold'>{data.taskNumbers.activeTasks}</h2>
            <h3 className='text-xl font-meduim'>Active TASK </h3>
        </div>

        <div className='rounded-2xl w-[45%] py-5 px-5 bg-purple-400'>
            <h2 className='text-3xl font-semibold'>{data.taskNumbers.failedTasks}</h2>
            <h3 className='text-xl font-meduim'>Failed TASK </h3>
        </div>
      
    </div>
  )
}

export default TaskListNum
