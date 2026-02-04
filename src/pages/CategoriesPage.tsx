import { Link } from '@tanstack/react-router'
import { useStore } from '../store/store'
import type { Category } from '../types/category';

export default function CategoriesPage() {
    const { categories } = useStore();
    
    return (
        
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
                    </div>
                </Link>
            ))}
        </div>
    );
}