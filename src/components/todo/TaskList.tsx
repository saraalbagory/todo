
import type { Task } from '../../types/task';
import TaskCard from './TaskCard';
import { useStore } from '../../store/store';

const TaskList = ({ tasks }: { tasks: Task[] }) => {
    const { toggleTaskCompletion} = useStore();
    return (
        <>
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