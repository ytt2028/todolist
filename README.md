Project Brief: To-Do List Application
Objective
Create a simple To-Do List application where users can add, edit, delete, and mark
tasks as completed. This project will help you get hands-on experience with React,
npm, and basic Git workflows.
Prerequisites
 Basic understanding of JavaScript, HTML, and CSS.
 Node.js and npm installed on your machine.
 Git installed on your machine.
Steps
1. Set Up Git Repository
o Create a new directory for your project:
o mkdir todo-list-app
o cd todo-list-app
o Initialize a new Git repository:
o git init
o Create a .gitignore file to exclude node_modules and other unnecessary
files:
o echo "node_modules/" > .gitignore
2. Create a React Project
o Use Create React App to set up the project:
o npx create-react-app .
o This command will generate a new React project in the current directory.
3. Install Dependencies
o Navigate to your project directory and install any additional dependencies
you might need. For this project, you can start with the default
dependencies provided by Create React App.
4. Project Structure
o Your project structure should look something like this:
o todo-list-app/
o +-- node_modules/
o +-- public/
o +-- src/
o ¦ +-- components/
o ¦ ¦ +-- TodoItem.js
o ¦ ¦ +-- TodoList.js
o ¦ ¦ +-- AddTodo.js
o ¦ +-- App.css
o ¦ +-- App.js
o ¦ +-- index.css
o ¦ +-- index.js
o +-- .gitignore
Classifica(on: PROTECTED
o +-- package.json
o +-- README.md
5. Develop the Application
o App Component: The main component that will render the To-Do List and
Add Todo components.
o TodoList Component: A component that will render a list of TodoItem
components.
o TodoItem Component: A component that represents a single to-do item.
o AddTodo Component: A component with a form to add new to-do items.
6. Basic Styling
o Use CSS to style your application. You can create a styles.css file or use
inline styles.
7. Running the Application
o Start the development server:
o npm start
o This will run your application on http://localhost:3000.
8. Commit Your Changes
o Add your changes to the staging area:
o git add .
o Commit your changes:
o git commit -m "Initial commit with basic project setup"
9. Push to Remote Repository
o Create a new repository on GitHub (or any other Git hosting service).
o Add the remote repository to your local Git repository:
o git remote add origin <your-repo-url>
o Push your changes to the remote repository:
o git push -u origin main
Features to Implement
 Add Todo: A form to add new to-do items.
 Display Todos: A list to display all to-do items.
 Edit Todo: Functionality to edit existing to-do items.
 Delete Todo: Functionality to delete to-do items.
 Mark as Completed: Functionality to mark to-do items as completed.
Additional Tips
 Use React hooks like useState and useEhect to manage state and side ehects.
 Break down your application into smaller, reusable components.
 Keep your code clean and well-documented.

