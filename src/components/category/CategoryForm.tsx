// import { useState } from "react";
// import { useStore } from "../../store/store";
// import type { Category } from "../../types/category";

import { useActionState, useEffect, useRef } from "react";
import { addCategoryAction, editCategoryAction } from "../../helperFunctions/formActions/CategoryFormActions";
import toast from "react-hot-toast";
import type { Category } from "../../types/category";

// interface EditCategoryFormProps {
//   category: Category;
//   onClose: () => void;
// }

// export default function EditCategoryForm({ category, onClose }: EditCategoryFormProps) {
//   const { updateCategory } = useStore();

//   // Form State
//   const [name, setName] = useState(category.name);
//   const [error, setError] = useState("");

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();

//     if (!name.trim()) {
//       setError("Category name is required");
//       return;
//     }

//     updateCategory(category.id,
//       name.trim().toUpperCase(),
//     );

//     setError("");
//     alert("Category updated successfully!");
//     onClose();
//   };

//   return (
//     <form
//       onSubmit={handleSubmit}
//     >
//       <h2 >Edit Category</h2>

//       <div>
//         <label htmlFor="edit-category-name" >
//           Category Name <span className="text-red-500">*</span>
//         </label>
//         <input
//           id="edit-category-name"
//           value={name}
//           onChange={(e) => {
//             setName(e.target.value);
//             if (error) setError("");
//           }}
//           placeholder="Enter category name"

//         />
//       </div>

//       {error && <div >{error}</div>}

//       <div className="flex gap-2">
//         <button
//           type="submit"
//           disabled={!name.trim()}
//           className="flex-1 rounded-md bg-blue-600 px-4 py-2 text-white font-medium
//              hover:bg-blue-700 transition-colors
//              disabled:opacity-50 disabled:cursor-not-allowed dark:bg-blue-700 dark:hover:bg-blue-800"
//         >
//           Update Category
//         </button>
//         <button
//           type="button"
//           onClick={onClose}
//           className="flex-1 rounded-md bg-gray-400 dark:bg-gray-600 px-4 py-2 text-white font-medium
//              hover:bg-gray-500 dark:hover:bg-gray-700 transition-colors"
//         >
//           Cancel
//         </button>
//       </div>
//     </form>
//   );
// }


interface CategoryFormProps {
  category?: Category | null;
}

const CategoryForm = ({ category }: CategoryFormProps) => {
  const catformAction = category ? editCategoryAction : addCategoryAction;
  const formRef = useRef<HTMLFormElement>(null);

  const [state, formAction] = useActionState(catformAction, {
    success: false,
    message: '',
  });

  useEffect(() => {
    if (state.success) {
      if (!category) {
        formRef.current?.reset();
      }
      toast.success(state.message);
    }
  }, [state.message, state.success, category]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 p-4">
      
      <form
        key={category?.id || 'new'}
        action={formAction}
        ref={formRef}
        className="w-full max-w-md space-y-4 bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md border border-gray-100 dark:border-gray-700"
      >
        <h2 className="text-xl font-bold mb-4 dark:text-white">
          {category ? "Edit Category" : "New Category"}
        </h2>

        {/* Hidden inputs to pass IDs for editing */}
        {category && <input type="hidden" name="categoryId" value={category.id} />}
        {category && <input type="hidden" name="categoryOldName" value={category.name} />}

        <div>
          {/* FIX: typo 'categoty-name' -> 'category-name' to match input ID */}
          <label htmlFor="category-name" className="block text-sm font-medium text-gray-700 dark:text-gray-200">
            Category Name <span className="text-red-500">*</span>
          </label>
          <input
            id="category-name"
            name="categoryName"
            defaultValue={category?.name || ''} 
            className={`mt-1 w-full rounded-md border px-3 py-2
                     text-gray-900 dark:text-gray-100
                     bg-white dark:bg-gray-800
                     focus:outline-none focus:ring-2 focus:ring-blue-500
                     ${!state.success && state.message ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'}`}
          />
          {!state.success && state.message && (
            <p className="text-red-500 text-xs mt-1">{state.message}</p>
          )}
        </div>

        <button
          type="submit"
          className="w-full rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700 transition-colors"
        >
          
          {category ? "Update Category" : "Add Category"}
        </button>
      </form>
    </div>
  );
};

export default CategoryForm;