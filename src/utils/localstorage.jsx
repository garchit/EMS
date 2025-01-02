
// const employees= [
//     {
//       "id": 1,
//       "email": "john.doe@example.com",
//       "password": "123",
//       "tasks": [
//         {
//           "taskTitle": "Design Homepage",
//           "taskDate": "2024-12-20",
//           "taskCategory": "Design",
//           "taskDescription": "Create a mockup for the homepage.",
//           "activeTask": true,
//           "newTask": true,
//           "completedTask": false,
//           "failed": false
//         },
//         {
//           "taskTitle": "Write Blog Post",
//           "taskDate": "2024-12-22",
//           "taskCategory": "Content",
//           "taskDescription": "Write an engaging blog post on UI/UX trends.",
//           "activeTask": false,
//           "newTask": false,
//           "completedTask": true,
//           "failed": false
//         }
//       ]
//     },
//     {
//       "id": 2,
//       "email": "jane.smith@example.com",
//       "password": "123",
//       "tasks": [
//         {
//           "taskTitle": "Implement API",
//           "taskDate": "2024-12-21",
//           "taskCategory": "Development",
//           "taskDescription": "Integrate the payment gateway API.",
//           "activeTask": true,
//           "newTask": true,
//           "completedTask": false,
//           "failed": false
//         },
//         {
//           "taskTitle": "Fix Login Issue",
//           "taskDate": "2024-12-20",
//           "taskCategory": "Bug Fix",
//           "taskDescription": "Resolve the error on the login page.",
//           "activeTask": false,
//           "newTask": false,
//           "completedTask": true,
//           "failed": false
//         },
//         {
//           "taskTitle": "Update Documentation",
//           "taskDate": "2024-12-23",
//           "taskCategory": "Documentation",
//           "taskDescription": "Update API documentation for the v2 release.",
//           "activeTask": false,
//           "newTask": true,
//           "completedTask": false,
//           "failed": true
//         }
//       ]
//     },
//     {
//       "id": 3,
//       "email": "robert.brown@example.com",
//       "password": "123",
//       "tasks": [
//         {
//           "taskTitle": "Code Review",
//           "taskDate": "2024-12-19",
//           "taskCategory": "Review",
//           "taskDescription": "Review the codebase for the shopping cart module.",
//           "activeTask": false,
//           "newTask": false,
//           "completedTask": true,
//           "failed": false
//         },
//         {
//           "taskTitle": "Optimize Query",
//           "taskDate": "2024-12-20",
//           "taskCategory": "Database",
//           "taskDescription": "Optimize SQL queries for faster performance.",
//           "activeTask": true,
//           "newTask": false,
//           "completedTask": false,
//           "failed": false
//         },
//         {
//           "taskTitle": "Prepare Presentation",
//           "taskDate": "2024-12-24",
//           "taskCategory": "Presentation",
//           "taskDescription": "Prepare slides for the year-end performance review.",
//           "activeTask": false,
//           "newTask": true,
//           "completedTask": false,
//           "failed": false
//         }
//       ]
//     },
//     {
//       "id": 4,
//       "email": "emily.davis@example.com",
//       "password": "123",
//       "tasks": [
//         {
//           "taskTitle": "Create Wireframe",
//           "taskDate": "2024-12-20",
//           "taskCategory": "Design",
//           "taskDescription": "Draft wireframes for the new user profile page.",
//           "activeTask": true,
//           "newTask": true,
//           "completedTask": false,
//           "failed": false
//         },
//         {
//           "taskTitle": "Debug API Calls",
//           "taskDate": "2024-12-22",
//           "taskCategory": "Bug Fix",
//           "taskDescription": "Identify and resolve issues with API requests.",
//           "activeTask": false,
//           "newTask": false,
//           "completedTask": true,
//           "failed": false
//         },
//         {
//           "taskTitle": "Write Unit Tests",
//           "taskDate": "2024-12-23",
//           "taskCategory": "Testing",
//           "taskDescription": "Write unit tests for the user authentication module.",
//           "activeTask": false,
//           "newTask": true,
//           "completedTask": false,
//           "failed": false
//         }
//       ]
//     },
//     {
//       "id": 5,
//       "email": "michael.johnson@example.com",
//       "password": "123",
//       "tasks": [
//         {
//           "taskTitle": "Plan Sprint",
//           "taskDate": "2024-12-20",
//           "taskCategory": "Planning",
//           "taskDescription": "Plan tasks and goals for the upcoming sprint.",
//           "activeTask": true,
//           "newTask": true,
//           "completedTask": false,
//           "failed": false
//         },
//         {
//           "taskTitle": "Implement Dashboard",
//           "taskDate": "2024-12-22",
//           "taskCategory": "Development",
//           "taskDescription": "Develop the admin dashboard for task management.",
//           "activeTask": false,
//           "newTask": false,
//           "completedTask": true,
//           "failed": false
//         },
//         {
//           "taskTitle": "Conduct Team Meeting",
//           "taskDate": "2024-12-25",
//           "taskCategory": "Meeting",
//           "taskDescription": "Hold a meeting to discuss project progress.",
//           "activeTask": false,
//           "newTask": false,
//           "completedTask": false,
//           "failed": true
//         }
//       ]
//     }
//   ]
// const admin = [
//     {
//         "id": 0,
//         "email": "admin@example.com",
//         "password": "admin123"
//       }
// ]

localStorage.clear()

const employees = [
  {
    "id": 1,
    "name": "Rajesh Kumar",
    "email": "rajesh.kumar@example.com",
    "password": "123",
    "tasks": [
      {
        "taskTitle": "Design Homepage",
        "taskDate": "2024-12-20",
        "taskCategory": "Design",
        "taskDescription": "Create a mockup for the homepage.",
        "activeTask": true,
        "newTask": true,
        "completedTask": false,
        "failed": false
      },
      {
        "taskTitle": "Write Blog Post",
        "taskDate": "2024-12-22",
        "taskCategory": "Content",
        "taskDescription": "Write an engaging blog post on UI/UX trends.",
        "activeTask": false,
        "newTask": false,
        "completedTask": true,
        "failed": false
      }
    ],
    "taskNumbers": {
      "activeTasks": 1,
      "completedTasks": 1,
      "newTasks": 1,
      "failedTasks": 0
    }
  },
  {
    "id": 2,
    "name": "Neha Sharma",
    "email": "neha.sharma@example.com",
    "password": "123",
    "tasks": [
      {
        "taskTitle": "Implement API",
        "taskDate": "2024-12-21",
        "taskCategory": "Development",
        "taskDescription": "Integrate the payment gateway API.",
        "activeTask": true,
        "newTask": true,
        "completedTask": false,
        "failed": false
      },
      {
        "taskTitle": "Fix Login Issue",
        "taskDate": "2024-12-20",
        "taskCategory": "Bug Fix",
        "taskDescription": "Resolve the error on the login page.",
        "activeTask": false,
        "newTask": false,
        "completedTask": true,
        "failed": false
      },
      {
        "taskTitle": "Update Documentation",
        "taskDate": "2024-12-23",
        "taskCategory": "Documentation",
        "taskDescription": "Update API documentation for the v2 release.",
        "activeTask": false,
        "newTask": true,
        "completedTask": false,
        "failed": true
      }
    ],
    "taskNumbers": {
      "activeTasks": 1,
      "completedTasks": 1,
      "newTasks": 2,
      "failedTasks": 1
    }
  },
  {
    "id": 3,
    "name": "Rohan Mehta",
    "email": "rohan.mehta@example.com",
    "password": "123",
    "tasks": [
      {
        "taskTitle": "Code Review",
        "taskDate": "2024-12-19",
        "taskCategory": "Review",
        "taskDescription": "Review the codebase for the shopping cart module.",
        "activeTask": false,
        "newTask": false,
        "completedTask": true,
        "failed": false
      },
      {
        "taskTitle": "Optimize Query",
        "taskDate": "2024-12-20",
        "taskCategory": "Database",
        "taskDescription": "Optimize SQL queries for faster performance.",
        "activeTask": true,
        "newTask": false,
        "completedTask": false,
        "failed": false
      },
      {
        "taskTitle": "Prepare Presentation",
        "taskDate": "2024-12-24",
        "taskCategory": "Presentation",
        "taskDescription": "Prepare slides for the year-end performance review.",
        "activeTask": false,
        "newTask": true,
        "completedTask": false,
        "failed": false
      }
    ],
    "taskNumbers": {
      "activeTasks": 1,
      "completedTasks": 1,
      "newTasks": 1,
      "failedTasks": 0
    }
  },
  {
    "id": 4,
    "name": "Ananya Gupta",
    "email": "ananya.gupta@example.com",
    "password": "123",
    "tasks": [
      {
        "taskTitle": "Create Wireframe",
        "taskDate": "2024-12-20",
        "taskCategory": "Design",
        "taskDescription": "Draft wireframes for the new user profile page.",
        "activeTask": true,
        "newTask": true,
        "completedTask": false,
        "failed": false
      },
      {
        "taskTitle": "Debug API Calls",
        "taskDate": "2024-12-22",
        "taskCategory": "Bug Fix",
        "taskDescription": "Identify and resolve issues with API requests.",
        "activeTask": false,
        "newTask": false,
        "completedTask": true,
        "failed": false
      },
      {
        "taskTitle": "Write Unit Tests",
        "taskDate": "2024-12-23",
        "taskCategory": "Testing",
        "taskDescription": "Write unit tests for the user authentication module.",
        "activeTask": false,
        "newTask": true,
        "completedTask": false,
        "failed": false
      }
    ],
    "taskNumbers": {
      "activeTasks": 1,
      "completedTasks": 1,
      "newTasks": 2,
      "failedTasks": 0
    }
  },
  {
    "id": 5,
    "name": "Vikram Singh",
    "email": "vikram.singh@example.com",
    "password": "123",
    "tasks": [
      {
        "taskTitle": "Plan Sprint",
        "taskDate": "2024-12-20",
        "taskCategory": "Planning",
        "taskDescription": "Plan tasks and goals for the upcoming sprint.",
        "activeTask": true,
        "newTask": true,
        "completedTask": false,
        "failed": false
      },
      {
        "taskTitle": "Implement Dashboard",
        "taskDate": "2024-12-22",
        "taskCategory": "Development",
        "taskDescription": "Develop the admin dashboard for task management.",
        "activeTask": false,
        "newTask": false,
        "completedTask": true,
        "failed": false
      },
      {
        "taskTitle": "Conduct Team Meeting",
        "taskDate": "2024-12-25",
        "taskCategory": "Meeting",
        "taskDescription": "Hold a meeting to discuss project progress.",
        "activeTask": false,
        "newTask": false,
        "completedTask": false,
        "failed": true
      }
    ],
    "taskNumbers": {
      "activeTasks": 1,
      "completedTasks": 1,
      "newTasks": 1,
      "failedTasks": 1
    }
  }
];

const admin = [
  {
    "id": 0,
    "email": "admin@example.com",
    "password": "admin123"
  }
];


export const getLocalStorage = () =>{
   const employees = JSON.parse(localStorage.getItem('employees'));
   const admin = JSON.parse(localStorage.getItem('admin'))
//    console.log(admin)
    return {employees , admin}
}

export const setLocalStorage = () =>{
    localStorage.setItem('employees' , JSON.stringify(employees))
    localStorage.setItem('admin' , JSON.stringify(admin))
}


// Initialize app: Check and reset localStorage if needed
export const initializeApp = () => {
  const { employees, admin } = getLocalStorage();
  if (employees === null || admin === null) {
      console.log("Local storage is empty. Setting default data...");
      setLocalStorage();
  }
};

// Call this function when your app starts
initializeApp();