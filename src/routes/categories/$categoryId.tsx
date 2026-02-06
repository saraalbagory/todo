import { createFileRoute } from '@tanstack/react-router'
import CategoryTasksPage from '../../pages/CategoryTasksPage';

export const Route = createFileRoute('/categories/$categoryId')({
  component: RouteComponent,
})

function RouteComponent() {

  const {categoryId}=Route.useParams();
  //TODO : in the service fetch the list of ToDo of that category and display them here
  return <CategoryTasksPage categoryId={categoryId}/>;
}
