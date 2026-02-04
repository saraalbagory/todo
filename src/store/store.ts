import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import type { Category } from '../types/category'

type StoreState = {

    categories: Category[]


    // Category Actions
    addCategory: (category: Category) => void
    updateCategory: (id: string, name: string) => void
    //TODO: fix delete category to also delete tasks in that category
    deleteCategory: (id: string) => void


}


export const useStore = create<StoreState>()(
    persist(
        (set) => ({

            categories: [
                { id: '1', name: 'Personal' },
                { id: '2', name: 'Work' },
                { id: '3', name: 'Urgent' }
            ],

            addCategory: (category) => set((state) => ({
                categories: [...state.categories, category]
            })),

            updateCategory: (id, name) => set((state) => ({
                categories: state.categories.map((c) => (c.id === id ? { ...c, name } : c))
            })),

            deleteCategory: (id) => set((state) => {

                const newCategories = state.categories.filter((c) => c.id !== id)


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