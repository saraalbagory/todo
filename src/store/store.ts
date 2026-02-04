import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import type { Category } from '../types/category'

type StoreState = {

    categories: Category[]


    // Category Actions
    addCategory: (category: Category) => void
    updateCategory: (id: string, name: string) => void
    findCategory: (name: string) => string
    //TODO: fix delete category to also delete tasks in that category
    deleteCategory: (id: string) => void


}
//TODO: check if the category exist before adding it

export const useStore = create<StoreState>()(
    persist(
        (set, get) => ({

            categories: [
               
            ],

            addCategory: (category) => set((state) => ({
                categories: [...state.categories, category]
            })),

            updateCategory: (id, name) => set((state) => ({
                categories: state.categories.map((c) => (c.id === id ? { ...c, name } : c))
            })),
            findCategory: (name) => {
                const state = get();
                const lowerName = name.toLowerCase();

                return state.categories.find((c: Category) => c.name.toLowerCase() === lowerName)?.id || "";
            },

            deleteCategory: (id) => set((state) => {

    
                const newCategories = state.categories.filter((c) => c.id !==  id);
                //the logic of the casading delete will be here 

                return {
                    categories: newCategories,

                }
            }),

        }),
        {
            name: 'todo-app-storage', // Key in localStorage
        }
    )
)