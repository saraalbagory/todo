
import { useStore } from "../../store/store";



export async function addTaskAction(prevState: unknown, formData: FormData) {
    const { addTask } = useStore.getState();
    const title = formData.get("title")?.toString().trim();
    const description = formData.get("description")?.toString().trim() || "";
    const categoryId = formData.get("categoryId")?.toString().trim();


    if (!title) {
        return {
            success: false,
            formErrorType: {
                title: true,
                category: false,
            },
            message: "Task title is required"
        }
    }
    if (!categoryId) {
        return {
            success: false,
            formErrorType: {
                title: false,
                category: true,
            },
            message: "Task category is required"
        }
    }




    addTask({
        id: crypto.randomUUID(),
        title: title!,
        description: description,
        categoryId: categoryId!,
        completed: false
    });
    return {
        success: true,
        formErrorType: {
            title: false,
            category: false
        },
        message: "Task added successfully"
    }
}