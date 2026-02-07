import { createFileRoute } from '@tanstack/react-router'
import CategoryTasksPage from '../../../pages/CategoryTasksPage';

export const Route = createFileRoute('/categories/$categoryId/')({
  component: RouteComponent,
})

function RouteComponent() {
  const {categoryId}=Route.useParams();
  return <CategoryTasksPage categoryId={categoryId}/>;
}
