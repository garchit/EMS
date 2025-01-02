import React from 'react'

const AcceptedTask = (data) => {
    console.log(data)
    return (
        <div>
            <div className='flex-shrink-0 rounded-xl h-full p-4 w-[300px] bg-indigo-500'>
            <h2 className='text-2xl text-black'>Accepted Tasks</h2>

                <div className='flex justify-between items-center mt-1'>
                    <h3 className='bg-red-700 rounded ml-1 px-2'>{data.data.taskCategory}</h3>
                    <h4>{data.data.taskDate}</h4>
                </div>
                <h3 className='mt-7 text-2xl font-semibold'>{data.data.taskTitle}</h3>
                <p className='text-sm mt-5'>
                    {/* Hitesh Choudhary is a prominent educator and technologist from India, renowned for his */}
                    {data.data.taskDescription}
                </p>
                <div className='flex justify-between mt-4'>
                <button className='bg-green-600 py-1 px-2 text-sm'>Mark as Completed</button>
                <button className='bg-red-500 py-1 px-2 text-sm'>Mark as Failed</button>
            </div>
            </div>
            
        </div>
    )
}

export default AcceptedTask
