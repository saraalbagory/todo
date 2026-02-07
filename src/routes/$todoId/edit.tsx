import { createFileRoute } from '@tanstack/react-router'
import TaskForm from '../../components/todo/TaskForm'
import { getTaskById } from '../../helperFunctions/dataHelper/todoDataFunctions';

export const Route = createFileRoute('/$todoId/edit')({
  component: RouteComponent,
})

function RouteComponent() {
  const {todoId}= Route.useParams();
  const task =getTaskById(todoId);
  return <TaskForm  task={task }/>
}
