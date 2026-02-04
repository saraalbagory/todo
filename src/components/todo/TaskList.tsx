import { Link } from '@tanstack/react-router';
import type { Task } from '../../types/task';

const TaskList = ({ tasks }: { tasks: Task[] }) => {
    return (
        <>
        {/* This is just a placeholder. this will be replaced by task Card later. */}
            {tasks.map((task: Task) => {
                return <Link to="/$todoId" params={{todoId:task.id} }key={task.id}>{task.title}</Link>
            })}
        </>
    );

}
export default TaskList;