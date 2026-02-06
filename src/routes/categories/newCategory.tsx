import { createFileRoute } from '@tanstack/react-router'
import CreateCategoryPage from '../../pages/CreateCategoryPage';

export const Route = createFileRoute('/categories/newCategory')({
  component: RouteComponent,
})

function RouteComponent() {
  return <CreateCategoryPage />;
}
