import TaskForm from "../components/todo/TaskForm";

const CreateTodoPage=()=>{
    return(
        <div className="flex flex-col items-center justify-center min-h-screen p-4">
            <h2 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white">Add New TODO</h2>
            <TaskForm/>
        </div>
    )
}
export default CreateTodoPage;