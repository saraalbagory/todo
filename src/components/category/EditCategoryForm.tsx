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
    >
      <h2 >Edit Category</h2>

      <div>
        <label htmlFor="edit-category-name" >
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

        />
      </div>

      {error && <div >{error}</div>}

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