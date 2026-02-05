import { useState } from "react";
import { useStore } from "../store/store"; 

//TODO: add validation and error handling
//TODO:give feedback on successful creation
export default function CategoryForm() {
  const [name, setName] = useState("");
  const [error, setError] = useState(""); 
  const { findCategory,addCategory } = useStore();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!name.trim()) {
      setError("Category name cannot be empty");
      return;
    }
    if(findCategory(name.trim())){
        setError("Category with this name already exists");
        return;
    }
    
    addCategory({ 
      id: crypto.randomUUID(), 
      name: name.trim().toUpperCase() 
    });

    setName("");
    setError("");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 m:auto max-w-md p-4 bg-gray-100 dark:bg-gray-700 rounded">
      <div>
        <label 
          htmlFor="category-name"
          className="block text-sm font-medium text-gray-700 dark:text-gray-200"
        >
          Category name
        </label>
        
        <input
          id="category-name" 
          value={name}
          onChange={(e) => {
            setName(e.target.value);
            if(error) setError("");
          }}
          placeholder="e.g. Work"
          className={`mt-1 w-full rounded-md border px-3 py-2
                     text-gray-900 dark:text-gray-100
                     bg-white dark:bg-gray-800
                     focus:outline-none focus:ring-2 focus:ring-blue-500
                     ${error ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'}`} 
        />
        {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
      </div>

      <button
        type="submit"
        disabled={!name.trim()} 
        className="rounded-md bg-black px-4 py-2 text-white
                   hover:bg-gray-800 dark:bg-white dark:text-black
                   dark:hover:bg-gray-200
                   disabled:opacity-50 disabled:cursor-not-allowed" 
      >
        Add Category
      </button>
    </form>
  );
}