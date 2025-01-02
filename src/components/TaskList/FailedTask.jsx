import React from 'react'

const FailedTask = ({data}) => {
    console.log(data)
    return (
        <div>
            <div className='flex-shrink-0 rounded-xl h-full p-4 w-[300px] bg-lime-400'>
            <h2 className='text-2xl text-black'>Failed Tasks </h2>

                <div className='flex justify-between items-center mt-1'>
                    <h3 className='bg-red-700 rounded ml-1 px-2'>{data.taskCategory}</h3>
                    <h4>{data.taskDate}</h4>
                </div>
                <h3 className='mt-7 text-2xl font-semibold'>{data.taskTitle}</h3>
                <p className='text-sm mt-5'>
                    {/* Hitesh Choudhary is a prominent educator and technologist from India, renowned for his */}
                    {data.taskDescription}
                </p>

                <div className='mt-2'>
                    <button className='w-full bg-blue-500'> Failed</button>
                </div>
            </div>


        </div>
    )
}

export default FailedTask