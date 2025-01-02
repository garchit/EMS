// import React from 'react'
// import Header from '../others/Header'

// const AdminDash = () => {
//     return (
//         <div className='h-screen w-full p-10'>
//             <Header />

//             <div>
//                 <form className='flex flex-wrap w-full bg-blue-200 items-center justify-between'>
//                     <div className='w-1/2'>

//                         <div>

//                             <h3>Task Title</h3>
//                             <input type="text" placeholder="Make a UI design" />
//                         </div>

//                         <div>

//                             <h3>Date</h3>
//                             <input type="date" />
//                         </div>

//                         <div>

//                             <h3>Assign to</h3>
//                             <input tupe="text" placeholder="employee name" />
//                         </div>

//                         <div>

//                             <h3>Category</h3>
//                             <input type="text" placeholder="Design , dev" />
//                         </div>

//                     </div>

//                     <div className='w-1/2'>

//                         <h3>Description</h3>
//                         <textarea name="" id="" cols="30" rows="10"></textarea>
//                     </div>



//                     <button>Create Task </button>

//                 </form>

//             </div>
//             <h1>Admin Dashboard </h1>
//         </div>
//     )
// }

// export default AdminDash



import React from 'react';
import Header from '../others/Header';
import CreateTask from '../others/CreateTask';
import AllTask from '../others/AllTask';

const AdminDash = ({changeUser}) => {
    return (
        <div className="h-screen w-full bg-gray-900 text-white p-10">
            <Header changeUser={changeUser}/>
           <CreateTask/>
           <AllTask/>
        </div>
    );
};

export default AdminDash;



