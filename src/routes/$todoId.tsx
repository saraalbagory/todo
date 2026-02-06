import { createFileRoute, } from '@tanstack/react-router'
import TodoDetailsPage from '../pages/TodoDetailsPage';

export const Route = createFileRoute('/$todoId')({
  component: RouteComponent,
})

function RouteComponent() {
  const {todoId}=Route.useParams();
  return <TodoDetailsPage id={todoId}/>;
}
