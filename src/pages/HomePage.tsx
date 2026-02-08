import { Link } from "@tanstack/react-router";
import TaskList from "../components/todo/TaskList";
import { useStore } from "../store/store"

const HomePage = () => {
    //get the categories and todos from the store
    const { todos } = useStore();


    return (
    <>
        <h1 className="text-3xl font-bold text-center mt-10">Welcome to the Todo App</h1>
        <p className="text-center mt-4 text-gray-600 dark:text-gray-300">
            Manage your tasks efficiently and stay organized!
        </p>
        <TaskList tasks={todos} />
        <Link to="/addTask">
        <button className="fixed bottom-6 right-6 bg-blue-600 text-white p-4 rounded-full shadow-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500" >
            + Add Task
        </button>
        </Link>
    </>
    )


}

export default HomePage