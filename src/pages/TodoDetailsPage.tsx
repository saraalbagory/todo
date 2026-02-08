
import { useNavigate, Link } from '@tanstack/react-router'
import { useStore } from '../store/store'




interface TodoDetailsPageProps {
  id: string
}


function TaskDetailPage({ id }: TodoDetailsPageProps) {
 
  const navigate = useNavigate()
  const taskId = id

  const task = useStore((state) => state.todos.find((t) => t.id === taskId))
  const categories = useStore((state) => state.categories)
  const { deleteTask, toggleTaskCompletion } = useStore()

  if (!task) {
    return (
      <div className="p-8 text-center">
        <h2 className="text-xl font-bold text-red-500">Task not found</h2>
        <p className="text-gray-500 mb-4">This task may have been deleted.</p>
        <Link to="/" className="text-blue-600 underline">Go Home</Link>
      </div>
    )
  }

  const categoryName = categories.find(c => c.id === task.categoryId)?.name || 'Uncategorized'


  return (
    
    <div className="max-w-2xl mx-auto p-6 space-y-6">
      <div className="bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm">

        <div className="flex items-start gap-4">
          <input
            type="checkbox"
            checked={task.completed}
            onChange={() => toggleTaskCompletion(task.id)}
            className="w-6 h-6 mt-1 cursor-pointer accent-blue-600"
          />

          <div className="space-y-2 flex-1">
            <h1 className={`text-3xl font-bold ${task.completed ? 'line-through text-gray-400' : 'text-gray-900 dark:text-white'}`}>
              {task.title}
            </h1>


            <div className="flex gap-2">
              <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full font-medium">
                📂 {categoryName}
              </span>
              <span className={`text-xs px-2 py-1 rounded-full font-medium ${task.completed ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}`}>
                {task.completed ? 'Completed' : 'Pending'}
              </span>
            </div>

            <hr className="border-gray-100 dark:border-gray-700 my-4" />
            <div className="text-gray-600 dark:text-gray-300 whitespace-pre-wrap leading-relaxed">
              {task.description || <span className="italic text-gray-400">No description provided.</span>}
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-between items-center">


        <div className="flex gap-3">

          <button
            onClick={() => {
              if (confirm("Delete this task?")) {
                deleteTask(task.id)
                navigate({ to: '/' })
              }
            }}
            className="delete-button"
          >
            Delete
          </button>
          <div className='flex  gap-2 '>
          <Link to="/$todoId/edit" 
            params={{ todoId: task.id }}><button className="text-white bg-blue-600 hover:bg-blue-400 px-3 py-1 rounded" >
            Edit 
            {/* <Edit2 size={18}></Edit2> */}
          </button></Link>
          </div>
        </div>
      </div>
    </div>)}
  



export default TaskDetailPage;