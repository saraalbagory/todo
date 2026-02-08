import TaskList from "../components/todo/TaskList";
import { useStore } from "../store/store";


interface CategoryTaskProps {
  categoryId: string;
}

const CategoryTasksPage=({categoryId}:CategoryTaskProps)=>{
   // TODO :fetch the category , this logic isnt suppose to be here (MAKE IT A HELPER FUNCTION)
   const {categories,todos} = useStore();
   const category = categories.find((c) => c.id === categoryId);
   const categoryTasks = todos.filter((t) => t.categoryId === categoryId);

   return(
    < div className="max-w-4xl mx-auto p-6 space-y-6">
    <h1 className=" text-3xl font-bold  "> {category?.name} Todo</h1>
    <TaskList tasks={categoryTasks} />
    </div>
   )

   
}

export default CategoryTasksPage;