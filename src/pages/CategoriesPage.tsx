import { Link } from '@tanstack/react-router'
import { useStore } from '../store/store'
import type { Category } from '../types/category';
import { Edit2, Trash2 } from 'lucide-react';

export default function CategoriesPage( ) {
    const { categories ,deleteCategory} = useStore();
    const handleDeletion = (id: string) => {
        deleteCategory(id);
    }
    return (
       <div className='flex flex-col max-w-4xl p-4 sm:p-6 items-center m-auto min-h-screen'>
        <h1 className="text-2xl sm:text-3xl font-bold mb-6 ">Categories</h1>
        <div className="flex flex-wrap gap-6 sm:gap-4 justify-center w-full"> 
            {categories.map((category: Category) => (
                <Link 
                    to="/categories/$categoryId" 
                    params={{ categoryId: category.id }} 
                    key={category.id} 
                    className="block p-4 hover:opacity-90 transition-opacity"
                >    
                    <div  className='bg-white flex dark:bg-gray-800 rounded-xl p-4 shadow-sm border border-gray-100 dark:border-gray-700'> 
                        <h2 >{category.name}</h2>
                        <div className="flex gap-2 w-full">
                        <button className='"w-full  items-center justify-center gap-2 text-red-500 bg-red-50 hover:bg-red-100 dark:bg-red-900/20 dark:hover:bg-red-900/40 p-3 rounded-lg transition-colors font-medium"' onClick={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            handleDeletion(category.id);
                        }}>
                           <Trash2 size={18} />
                        </button>

                         <Link to="/categories/$categoryId/edit" params={{ categoryId: category.id }}>
                        <button className='edit-button'>
                            <Edit2 size={18} />
                          
                        </button>
                        </Link>
                        </div>
                        
                    </div>
                </Link>
            ))}
        </div>
        <Link to="/categories/newCategory" className='mt-6 sm:mt-8'> 
           <button className='add-button '>
              + New Category
           </button >
        </Link>
        </div>

    );
}