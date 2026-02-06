import { useState } from "react";
import { useStore } from "../../store/store";
import type { Category } from "../../types/category";

interface EditCategoryFormProps {
  category: Category;
  onClose: () => void;
}

export default function EditCategoryForm({ category, onClose }: EditCategoryFormProps) {
  const { updateCategory } = useStore();

  // Form State
  const [name, setName] = useState(category.name);
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!name.trim()) {
      setError("Category name is required");
      return;
    }

    updateCategory(category.id, 
     name.trim().toUpperCase(),
    );

    setError("");
    alert("Category updated successfully!");
    onClose();
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4 max-w-md p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md border border-gray-200 dark:border-gray-700"
    >
      <h2 className="text-xl font-bold mb-4 dark:text-white">Edit Category</h2>

      <div>
        <label htmlFor="edit-category-name" className="block text-sm font-medium text-gray-700 dark:text-gray-200">
          Category Name <span className="text-red-500">*</span>
        </label>
        <input
          id="edit-category-name"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
            if (error) setError("");
          }}
          placeholder="Enter category name"
          className={`mt-1 w-full rounded-md border px-3 py-2
           bg-gray-50 dark:bg-gray-900 
           text-gray-900 dark:text-gray-100
           focus:outline-none focus:ring-2 focus:ring-blue-500
           ${error && !name ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'}`}
        />
      </div>

      {error && <div className="p-2 bg-red-100 border border-red-400 text-red-700 rounded text-sm">{error}</div>}
      
      <div className="flex gap-2">
        <button
          type="submit"
          disabled={!name.trim()}
          className="flex-1 rounded-md bg-blue-600 px-4 py-2 text-white font-medium
             hover:bg-blue-700 transition-colors
             disabled:opacity-50 disabled:cursor-not-allowed dark:bg-blue-700 dark:hover:bg-blue-800"
        >
          Update Category
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