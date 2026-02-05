import { Link } from '@tanstack/react-router'
import { useStore } from '../store/store'
import type { Category } from '../types/category';

export default function CategoriesPage() {
    const { categories ,deleteCategory} = useStore();
    const handleDeletion = (id: string) => {
        deleteCategory(id);
    }
    return (
       <div className='flex flex-col max-w-4xl p-4 sm:p-6 items-center m-auto min-h-screen'>
        <h1 className="text-2xl sm:text-3xl font-bold mb-6 text-gray-900 dark:text-white">Categories</h1>
        <div className="flex flex-wrap gap-3 sm:gap-4 justify-center w-full"> 
            {categories.map((category: Category) => (
                <Link 
                    to="/categories/$categoryId" 
                    params={{ categoryId: category.id }} 
                    key={category.id} 
                    className="block p-4 hover:opacity-90 transition-opacity"
                >    
                    <div className='bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 flex flex-col gap-3 justify-between items-center w-32 h-32 sm:w-40 sm:h-40 rounded-lg shadow-sm hover:shadow-md dark:hover:shadow-lg dark:shadow-gray-900 transition-shadow p-3'> 
                        <h2 className='font-semibold text-center text-gray-900 dark:text-white text-sm sm:text-base'>{category.name}</h2>
                        <div className="flex gap-2 w-full">
                        <button className="flex-1 delete-button bg-red-500 hover:bg-red-600 dark:hover:bg-red-700 text-white px-2 py-1 rounded text-xs sm:text-sm transition-colors" onClick={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            handleDeletion(category.id);
                        }}>
                            Delete
                        </button>
                        <button className="flex-1 text-white bg-blue-600 hover:bg-blue-700 dark:hover:bg-blue-800 px-2 py-1 rounded text-xs sm:text-sm transition-colors">
                            Edit
                          { /* <Link to="/categories/$categoryId/edit" params={{ categoryId: category.id }}>Edit</Link>*/}
                        </button>
                        </div>
                        
                    </div>
                </Link>
            ))}
        </div>
        <Link to="/categories/newCategory" className='mt-6 sm:mt-8'> 
           <button className='add-button  text-white px-4 sm:px-6 py-2 rounded-4xl font-medium transition-colors'>
              + New Category
           </button>
        </Link>
        </div>

    );
}