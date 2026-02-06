import { useState } from "react";
import { useStore } from "../../store/store"; // Adjust path as needed


export default function TaskForm() {

    const { categories, addTask } = useStore();

    // Form State
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    // Default to the first category if available, or empty string
    const [categoryId, setCategoryId] = useState(categories[0]?.id || "");
    const [error, setError] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

       
        if (!title.trim()) {
            setError("Task title is required");
            return;
        }
        if (!categoryId) {
            setError("Please select a category (create one first if none exist)");
            return;
        }

       
        addTask({
            id: crypto.randomUUID(),
            title: title.trim(),
            description: description.trim(),
            categoryId: categoryId,
            completed: false,
            //TODO: add due date feature "date picker "
        });


        setTitle("");
        setDescription("");
        setError("");
        alert("Task created successfully!");
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="space-y-4 m:auto max-w-md p-6 "
        >
            <h2 className="text-xl font-bold mb-4">New Task</h2>

            <div>
                <label htmlFor="task-title" className="block text-sm font-medium">
                    Title <span className="text-red-500">*</span>
                </label>
                <input
                    id="task-title"
                    value={title}
                    onChange={(e) => {
                        setTitle(e.target.value);
                        if (error) setError("");
                    }}
                    placeholder="What needs to be done?"
                />
            </div>


            <div>
                <label htmlFor="task-desc" className="block text-sm font-medium">
                    Description
                </label>
                <textarea
                    id="task-desc"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="Add details..."
                    rows={3}
                 
                />
            </div>

            <div>
                <label htmlFor="task-category" className="block text-sm font-medium">
                    Category <span className="text-red-500">*</span>
                </label>

                {categories.length === 0 ? (
                    <p className="text-sm text-red-500 mt-1">
                        You need to create a Category first!
                    </p>
                ) : (
                    <select
                        id="task-category"
                        value={categoryId}
                        onChange={(e) => setCategoryId(e.target.value)}
                       
                    >
                        {categories.map((cat) => (
                            <option key={cat.id} value={cat.id}>
                                {cat.name}
                            </option>
                        ))}
                    </select>
                )}
            </div>

            {error && <div className="p-2 bg-red-100 border border-red-400 text-red-700 rounded text-sm">{error}</div>}
            <button
                type="submit"
                disabled={!title.trim() || categories.length === 0}
                
            >
                Create Task
            </button>
        </form>
    );
}