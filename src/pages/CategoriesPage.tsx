import { Link } from '@tanstack/react-router'
import { useStore } from '../store/store'
import type { Category } from '../types/category';

export default function CategoriesPage() {
    const { categories ,deleteCategory} = useStore();
    const handleDeletion = (id: string) => {
        deleteCategory(id);
    }
    return (
       <>
        <h1 className="text-2xl font-bold mb-4">Categories</h1>
        <div className="flex flex-col gap-2"> 
            {categories.map((category: Category) => (
                <Link 
                    to="/categories/$categoryId" 
                    params={{ categoryId: category.id }} 
                    key={category.id} 
                    className="block p-4 border rounded hover:bg-gray-50" 
                >    
                    <div> 
                        {category.name}
                        <button className="ml-4 text-sm text-red-500 hover:underline" onClick={(e) => {
                            e.preventDefault();
                            handleDeletion(category.id);
                        }}>
                            Delete
                        </button>
                    </div>
                </Link>
            ))}
        </div>
        <Link to="/categories/newCategory"> <button>
            new Category</button></Link>
        </>

    );
}