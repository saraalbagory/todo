import { useStore } from "../../store/store";

export const getTaskById=(id:string) =>{
    const {todos} =useStore.getState();
    return todos.find(t => t.id === id)
    
}

