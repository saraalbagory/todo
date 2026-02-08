import { Link } from "@tanstack/react-router";
import type { Task } from "../../types/task";
type TaskCardProps = {
    task: Task,
    categoryName: string,

    toggleTaskCompletion: (id: string) => void,

}


const TaskCard =({param}:{param:TaskCardProps})=>{
    const { task, toggleTaskCompletion } = param;


    return (
     <div className="max-w-2xl mx-auto p-6 space-y-6">
  
     

    
      <div className="bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm">
        
        <div className="flex items-start gap-4">
            <input 
                type="checkbox"
                checked={task.completed}
                onChange={(e) => {e.stopPropagation();
                    toggleTaskCompletion(task.id)}}
                onClick={e=>e.stopPropagation}
                className="w-6 h-6 mt-1 cursor-pointer accent-blue-600"
            />
            <Link to="/$todoId" params={{todoId:task.id}} key={task.id}>
                <div className="space-y-2 flex-1">
                    <h1 className={`text-3xl font-bold ${task.completed ? 'line-through text-gray-400' : 'text-gray-900 dark:text-white'}`}>
                        {task.title}
                    </h1>
                    
                    {/* TODO:Put icons for category  or color to represent the category*/}
                    <div className="flex gap-2">
                        <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full font-medium">
                             WORK
                        </span>
                        <span className={`text-xs px-2 py-1 rounded-full font-medium ${task.completed ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}`}>
                            {task.completed ? 'Completed' : 'Pending'}
                        </span>
                    </div>
                </div>
            </Link>
        </div>
      </div>
    </div>);
}

export default TaskCard;