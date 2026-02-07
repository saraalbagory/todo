import { useActionState, useEffect, useRef } from "react";
import { addTaskAction } from "../../helperFunctions/formActions/ToDoFormActions";
import { useStore } from "../../store/store";
import toast from "react-hot-toast";

export default function TaskForm() {

    const { categories } = useStore();
    const [state, formAction] = useActionState(addTaskAction, { success: false, formErrorType: { title: false, category: false }, message: "" });
    const formRef = useRef<HTMLFormElement>(null);

    useEffect(() => {
        if (state.success) {
            formRef.current?.reset();
            toast.success(state.message);
        }
    }, [state.success])
    return (
        <form ref={formRef} action={formAction} className=" flex flex-col justify-center space-y-4 m:auto max-w-md p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md border border-gray-200 dark:border-gray-700">
            <h2 className="text-xl font-bold mb-4 dark:text-white">New Task</h2>
            <div>
                <label htmlFor="todo-title" className="block text-sm font-medium text-gray-700 dark:text-gray-200">
                    Title <span className="text-red-500">*</span>
                </label>
                <input
                    id="todo-title"
                    name="title"
                    placeholder="what needs to be done?"
                    className={`mt-1 w-full rounded-md border px-3 py-2
                    bg-gray-50 dark:bg-gray-900 
                     bg-white dark:bg-gray-800
                     focus:outline-none focus:ring-2 focus:ring-blue-500
                     ${!state.success && state.message && state.formErrorType.title ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'}`} />
                {!state.success && state.message && state.formErrorType.title && <p> {state.message}</p>}

            </div>
            <div>
                <label htmlFor="task-desc" className="block text-sm font-medium">
                    Description
                </label>
                <textarea
                    id="task-desc"
                    name="description"
                    placeholder="Add details..."
                    rows={4}
                    className="mt-1 w-full rounded-md border border-gray-300 dark:border-gray-600
           bg-gray-50 dark:bg-gray-900 
           text-gray-900 dark:text-gray-100 px-3 py-2
           focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>
            <div>
                <label htmlFor="categoryType">
                    Category Type:
                </label>
                {categories.length === 0 ?
                    (<p className="text-sm text-red-500 mt-1"> You need to create a Category first!</p>) :
                    (
                        <select
                            id="task-category"
                            name="categoryId"
                            className="mt-1 w-full rounded-md border border-gray-300 dark:border-gray-600
                            bg-gray-50 dark:bg-gray-900 
                            text-gray-900 dark:text-gray-100 px-3 py-2
                            focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                            {categories.map((cat) => (
                                <option key={cat.id} value={cat.id}>
                                    {cat.name}
                                </option>
                            ))}
                        </select>)
                }
                {!state.success && state.formErrorType.category && (
                    <p className="p-2 bg-red-100 border border-red-400 text-red-700 rounded text-sm">{state.message}</p>
                )}
            </div>
            <button type="submit" className=" rounded-md bg-blue-600 px-4 py-2 text-white font-medium
             hover:bg-gray-500 dark:hover:bg-gray-700 transition-colors">
                Create Task
            </button>
        </form>
    )

}