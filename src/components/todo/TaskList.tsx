
import type { Task } from '../../types/task';
import TaskCard from './TaskCard';
import { useStore } from '../../store/store';

const TaskList = ({ tasks }: { tasks: Task[] }) => {
    const { toggleTaskCompletion} = useStore();
    return (
        <>
        {/* This is just a placeholder. this will be replaced by task Card later. */}
            {tasks.map((task: Task) => {
                return <TaskCard key={task.id} param={{
                    task: task,
                    categoryName: '',
                    toggleTaskCompletion: toggleTaskCompletion,
                    
                }} ></TaskCard>
            })}
        </>
    );

}
export default TaskList;