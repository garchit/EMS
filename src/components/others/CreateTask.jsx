import React, { useContext, useState } from 'react'
import { AuthContext } from '../../context/AuthProvider';

const CreateTask = () => {

    const[title, setTitle] = useState('');
    const[date, setDate] = useState('');
    const[assignTo, setAssignTo] = useState('');
    const[category, setCategory] = useState('');
    const[description, setDescription] = useState('');

    // const [task, setTask] = useState({});

    const { userData, updateUserData } = useContext(AuthContext);
    
    const submitHandler = (e) => {
        e.preventDefault();

        console.log(title  , assignTo , category , description);

        const newTask = {
            taskTitle: title,
            taskDate: date,
            taskCategory: category,
            taskDescription: description,
            activeTask: false,
            newTask: true,
            completedTask: false,
            failed: false
        };

        // setTask(newTask);

        // const data = JSON.parse(localStorage.getItem('employees')) || [];
        // console.log(data) 
        
        const updatedEmployees = userData.employees.map((emp) => {
            if (emp.name === assignTo) {
              emp.tasks.push(newTask);
              emp.taskNumbers.newTasks += 1;
            }
            return emp;
          });
      
        updateUserData({ ...userData, employees: updatedEmployees });

        // localStorage.setItem('employees' , JSON.stringify(data))
        // console.log(data);

        setTitle('');
        setDate('');
        setAssignTo('');
        setCategory('');
        setDescription('');
    }
    return (
        // <div>
            // <div>
                <div className="bg-gray-800 shadow-lg rounded-lg p-8 mt-8">
                    <h1 className="text-2xl font-bold mb-6">Admin Dashboard</h1>
                    <form onSubmit={(e)=>submitHandler(e)} className="flex flex-wrap gap-6">
                        {/* Left Section */}
                        <div className="w-full lg:w-1/2 space-y-4">
                            <div>
                                <h3 className="text-lg font-medium mb-2">Task Title</h3>
                                <input
                                    onChange={(e)=>setTitle(e.target.value)}
                                    value={title}
                                    type="text"
                                    placeholder="Make a UI design"
                                    className="w-full border border-gray-600 bg-gray-700 rounded-md p-3 focus:ring-2 focus:ring-green-400 focus:outline-none"
                                />
                            </div>

                            <div>
                                <h3 className="text-lg font-medium mb-2">Date</h3>
                                <input
                                onChange={(e)=>setDate(e.target.value)}
                                    value={date}
                                    type="date"
                                    className="w-full border border-gray-600 bg-gray-700 rounded-md p-3 focus:ring-2 focus:ring-green-400 focus:outline-none"
                                />
                            </div>

                            <div>
                                <h3 className="text-lg font-medium mb-2">Assign to</h3>
                                <input
                                onChange={(e)=>setAssignTo(e.target.value)}
                                    value={assignTo}
                                    type="text"
                                    placeholder="Employee name"
                                    className="w-full border border-gray-600 bg-gray-700 rounded-md p-3 focus:ring-2 focus:ring-green-400 focus:outline-none"
                                />
                            </div>

                            <div>
                                <h3 className="text-lg font-medium mb-2">Category</h3>
                                <input
                                onChange={(e)=>setCategory(e.target.value)}
                                    value={category}
                                    type="text"
                                    placeholder="Design, Dev"
                                    className="w-full border border-gray-600 bg-gray-700 rounded-md p-3 focus:ring-2 focus:ring-green-400 focus:outline-none"
                                />
                            </div>
                        </div>

                        {/* Right Section */}
                        <div className="w-full lg:w-1/2 flex flex-col">
                            <div>
                                <h3 className="text-lg font-medium mb-2">Description</h3>
                                <textarea
                                    onChange={(e)=>setDescription(e.target.value)}
                                    value={description}
                                    placeholder="Add task description..."
                                    rows="8"
                                    className="w-full border border-gray-600 bg-gray-700 rounded-md p-3 focus:ring-2 focus:ring-green-400 focus:outline-none"
                                ></textarea>
                            </div>

                            {/* Submit Button */}
                            <div className="mt-4">
                                <button
                                    type="submit"
                                    className="bg-green-500 text-white px-6 py-3 rounded-md hover:bg-green-600 transition duration-300"
                                >
                                    Create Task
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            // </div>
        // </div>
    )
}

export default CreateTask
