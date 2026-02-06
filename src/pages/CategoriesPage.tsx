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
        <h1 className="text-2xl sm:text-3xl font-bold mb-6 ">Categories</h1>
        <div className="flex flex-wrap gap-3 sm:gap-4 justify-center w-full"> 
            {categories.map((category: Category) => (
                <Link 
                    to="/categories/$categoryId" 
                    params={{ categoryId: category.id }} 
                    key={category.id} 
                    className="block p-4 hover:opacity-90 transition-opacity"
                >    
                    <div > 
                        <h2 >{category.name}</h2>
                        <div className="flex gap-2 w-full">
                        <button onClick={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            handleDeletion(category.id);
                        }}>
                            Delete
                        </button>
                        <button>
                          { /* <Link to="/categories/$categoryId/edit" params={{ categoryId: category.id }}>Edit</Link>*/}
                        </button>
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