// import { useState } from "react";
// import { useStore } from "../../store/store";
// import type { Category } from "../../types/category";

import { useActionState, useEffect, useRef } from "react";
import { addCategoryAction } from "../../helperFunctions/formActions/CategoryFormActions";
import toast from "react-hot-toast";

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


const CategoryForm=()=>{
  

  const formRef=useRef<HTMLFormElement>(null);


  const [state, formAction]=useActionState( addCategoryAction,
    {
      success:false,
      message:''
    }
  )

  useEffect(()=>{
    if(state.success)
    {
      formRef.current?.reset();
      toast.success(state.message)
    }
  },[state.success])


  return(
    <form action={formAction} ref={formRef} className="space-y-4 m:auto max-w-md p-4 bg-gray-100 dark:bg-gray-700 rounded">
       <h2 className="text-xl font-bold mb-4">New Category</h2>
      <div>
        <label htmlFor="categoty-name">
          Category Name <span className="text-red-500">*</span>
        </label>
        <input
          id="category-name"
          name="categoryName"
          placeholder="e.g. Work"
          className={`mt-1 w-full rounded-md border px-3 py-2
                     text-gray-900 dark:text-gray-100
                     bg-white dark:bg-gray-800
                     focus:outline-none focus:ring-2 focus:ring-blue-500
                     ${!state.success && state.message ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'}`}
        />
        {!state.success && state.message && <p className="text-red-500 text-xs mt-1">{state.message}</p>}
      </div>
      <button
        type="submit"
        className="rounded-md bg-black px-4 py-2 text-white">
          Add Category
        </button>
    </form>
  );



}

export default CategoryForm;


