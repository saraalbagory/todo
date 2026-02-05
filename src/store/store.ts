import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import type { Category } from '../types/category'
import type { Task } from '../types/task'

type StoreState = {

    categories: Category[],
    todos:Task[],


    // Category Actions
    addCategory: (category: Category) => void
    updateCategory: (id: string, name: string) => void
    findCategory: (name: string) => string
    deleteCategory: (id: string) => void


    // Task Actions
     addTask: (task: Task) => void
     updateTask: (id: string, updatedFields: Partial<Task>) => void
     deleteTask: (id: string) => void
     toggleTaskCompletion: (id: string) => void


}
//TODO: check if the category exist before adding it

export const useStore = create<StoreState>()(
    persist(
        (set, get) => ({

            categories: [
               
            ],
            todos:[],

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
                const newTodos = state.todos.filter((t) => t.categoryId !== id);
                return {
                    categories: newCategories,
                    todos:newTodos

                }
            }),

            addTask: (task) => set((state) => ({
                todos: [...state.todos, task]
            })),

            updateTask: (id, updatedFields) => set((state) => ({
                todos: state.todos.map((t) => (t.id === id ? { ...t, ...updatedFields } : t))
            })),

            deleteTask: (id) => set((state) => ({
                todos: state.todos.filter((t) => t.id !== id)
            })),
            toggleTaskCompletion: (id) => set((state) => ({
                todos: state.todos.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t))
            })),

        }),
        {
            name: 'todo-app-storage', // Key in localStorage
        }
    )
)