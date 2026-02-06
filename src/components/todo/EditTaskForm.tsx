import { useState} from "react";
import { useStore } from "../../store/store";
import type { Task } from "../../types/task";

interface EditTaskFormProps {
  task: Task;
  onClose: () => void;
}

export default function EditTaskForm({ task, onClose }: EditTaskFormProps) {
  const { categories, updateTask } = useStore();

  // Form State
  const [title, setTitle] = useState(task.title);
  const [description, setDescription] = useState(task.description);
  const [categoryId, setCategoryId] = useState(task.categoryId);
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!title.trim()) {
      setError("Task title is required");
      return;
    }
    if (!categoryId) {
      setError("Please select a category");
      return;
    }

    updateTask(task.id, {
      title: title.trim(),
      description: description?.trim(),
      categoryId: categoryId,
    });

    setError("");
    alert("Task updated successfully!");
    onClose();
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4 m:auto max-w-md p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md border border-gray-200 dark:border-gray-700"
    >
      <h2 className="text-xl font-bold mb-4 dark:text-white">Edit Task</h2>

      <div>
        <label htmlFor="edit-task-title" className="block text-sm font-medium text-gray-700 dark:text-gray-200">
          Title <span className="text-red-500">*</span>
        </label>
        <input
          id="edit-task-title"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
            if (error) setError("");
          }}
          placeholder="What needs to be done?"
          className={`mt-1 w-full rounded-md border px-3 py-2
           bg-gray-50 dark:bg-gray-900 
           text-gray-900 dark:text-gray-100
           focus:outline-none focus:ring-2 focus:ring-blue-500
           ${error && !title ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'}`}
        />
      </div>

      <div>
        <label htmlFor="edit-task-desc" className="block text-sm font-medium text-gray-700 dark:text-gray-200">
          Description
        </label>
        <textarea
          id="edit-task-desc"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Add details..."
          rows={3}
          className="mt-1 w-full rounded-md border border-gray-300 dark:border-gray-600
           bg-gray-50 dark:bg-gray-900 
           text-gray-900 dark:text-gray-100 px-3 py-2
           focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div>
        <label htmlFor="edit-task-category" className="block text-sm font-medium text-gray-700 dark:text-gray-200">
          Category <span className="text-red-500">*</span>
        </label>
        <select
          id="edit-task-category"
          value={categoryId}
          onChange={(e) => setCategoryId(e.target.value)}
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
        </select>
      </div>

      {error && <div className="p-2 bg-red-100 border border-red-400 text-red-700 rounded text-sm">{error}</div>}
      
      <div className="flex gap-2">
        <button
          type="submit"
          disabled={!title.trim()}
          className="flex-1 rounded-md bg-blue-600 px-4 py-2 text-white font-medium
             hover:bg-blue-700 transition-colors
             disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Update Task
        </button>
        <button
          type="button"
          onClick={onClose}
          className="flex-1 rounded-md bg-gray-400 dark:bg-gray-600 px-4 py-2 text-white font-medium
             hover:bg-gray-500 dark:hover:bg-gray-700 transition-colors"
        >
          Cancel
        </button>
      </div>
    </form>
  );
}