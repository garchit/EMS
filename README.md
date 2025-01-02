# Project EMS

## Overview
This project is a task management system built with React and Vite. It allows users to create, assign, and manage tasks. The project uses Context API for state management and localStorage for data persistence.

## Features
- User Authentication (Admin and Employee)
- Task Creation and Assignment
- Task Status Management (New, Active, Completed, Failed)
- Data Persistence with localStorage
- Responsive UI with Tailwind CSS

## Technologies Used
- React
- Vite
- Context API
- Tailwind CSS
- localStorage

## Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/your-username/project-ems.git
    cd project-ems
    ```

2. Install dependencies:
    ```sh
    npm install
    ```

3. Start the development server:
    ```sh
    npm run dev
    ```

## Project Structure

project-ems/ ├── public/ ├── src/ │ ├── components/ │ │ ├── CreateTask.jsx │ │ ├── AllTask.jsx │ │ ├── NewTask.jsx │ ├── context/ │ │ ├── AuthProvider.jsx │ ├── utils/ │ │ ├── localstorage.js │ ├── App.jsx │ ├── main.jsx ├── index.html ├── package.json ├── README.md



## Usage

### Authentication
- Admin Login: Use the credentials `admin@example.com` and `admin123`.
- Employee Login: Use the credentials stored in the `localstorage.js` file.

### Creating a Task
1. Navigate to the Create Task page.
2. Fill in the task details (title, date, assign to, category, description).
3. Click the "Create Task" button.

### Viewing Tasks
- Tasks are displayed in the AllTask component, categorized by their status (New, Active, Completed, Failed).

## Contributing
1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes.
4. Commit your changes (`git commit -m 'Add some feature'`).
5. Push to the branch (`git push origin feature-branch`).
6. Open a pull request.

## License
This project is licensed under the MIT License.

## Acknowledgements
- [Vite](https://vitejs.dev/)
- [React](https://reactjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [SWC](https://swc.rs/)

## Contact
For any inquiries, please contact [garchit84@gmail.com].