import TaskForm from "../components/todo/TaskForm";
import { getTaskById } from "../helperFunctions/dataHelper/todoDataFunctions";

const CreateTodoPage = ({ todoId = null }) => {

    return (
        <div className="flex flex-col items-center justify-center min-h-screen p-4">
            <h2 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white">{todoId ? "Add New TODO": "Edit TODO"}</h2>
            <TaskForm task={todoId && getTaskById(todoId)} />
        </div>
    )
}
export default CreateTodoPage;