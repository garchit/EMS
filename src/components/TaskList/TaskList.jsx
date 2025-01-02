import React from 'react'
import AcceptedTask from './AcceptedTask'
import NewTask from './NewTask'
import CompleteTask from './CompleteTask'
import FailedTask from './FailedTask'

const TaskList = ({data}) => {
    console.log(data)
    return (
        <div id='tasklist' className='h-[50%] overflow-x-auto flex items-center justify-start flex-nowrap gap-5 w-full py-5 mt-10'>
            {data.tasks.map((ele , idx)=>{
                if(ele.activeTask){
                    return <AcceptedTask key={idx} data={ele}/>
                }
                if(ele.completedTask){
                    return <CompleteTask key={idx} data={ele}/>
                }
                if(ele.newTask){
                    return <NewTask key={idx} data={ele}/>
                }
                if(ele.failed){
                    return <FailedTask key={idx} data={ele}/>
                }
            })}
            {/* <div className='flex-shrink-0 rounded-xl h-full p-4 w-[300px] bg-indigo-500'>

                <div className='flex justify-between items-center mt-1'>
                    <h3 className='bg-red-700 rounded ml-1 px-2'>High</h3>
                    <h4>20 Feb 2024</h4>
                </div>
                <h3 className='mt-7 text-2xl font-semibold'>Making a good react Project</h3>
                <p className='text-sm mt-5'>
                    Hitesh Choudhary is a prominent educator and technologist from India, renowned for his

                </p>
            </div> */}

            {/* <AcceptedTask/>  */}

            {/* <div className='flex-shrink-0 rounded-xl h-full p-4 w-[300px] bg-teal-400'>

                <div className='flex justify-between items-center mt-1'>
                    <h3 className='bg-red-700 rounded ml-1 px-2'>High</h3>
                    <h4>20 Feb 2024</h4>
                </div>
                <h3 className='mt-7 text-2xl font-semibold'>Making a good react Project</h3>
                <p className='text-sm mt-5'>
                    Hitesh Choudhary is a prominent educator and technologist from India, renowned for his

                </p>
            </div> */}

            {/* <NewTask/> */}

            {/* <div className='flex-shrink-0 rounded-xl h-full p-4 w-[300px] bg-amber-300'>

                <div className='flex justify-between items-center mt-1'>
                    <h3 className='bg-red-700 rounded ml-1 px-2'>High</h3>
                    <h4>20 Feb 2024</h4>
                </div>
                <h3 className='mt-7 text-2xl font-semibold'>Making a good react Project</h3>
                <p className='text-sm mt-5'>
                    Hitesh Choudhary is a prominent educator and technologist from India, renowned for his

                </p>
            </div> */}

            {/* <CompleteTask/> */}
{/* 
            <div className='flex-shrink-0 rounded-xl h-full p-4 w-[300px] bg-lime-400'>

                <div className='flex justify-between items-center mt-1'>
                    <h3 className='bg-red-700 rounded ml-1 px-2'>High</h3>
                    <h4>20 Feb 2024</h4>
                </div>
                <h3 className='mt-7 text-2xl font-semibold'>Making a good react Project</h3>
                <p className='text-sm mt-5'>
                    Hitesh Choudhary is a prominent educator and technologist from India, renowned for his

                </p>
            </div> */}

            {/* <FailedTask/> */}

            {/* <div className='flex-shrink-0 rounded-xl h-full p-4 w-[300px] bg-violet-300'>

                <div className='flex justify-between items-center mt-1'>
                    <h3 className='bg-red-700 rounded ml-1 px-2'>High</h3>
                    <h4>20 Feb 2024</h4>
                </div>
                <h3 className='mt-7 text-2xl font-semibold'>Making a good react Project</h3>
                <p className='text-sm mt-5'>
                    Hitesh Choudhary is a prominent educator and technologist from India, renowned for his

                </p>
            </div> */}

        


        </div>
    )
}

export default TaskList
