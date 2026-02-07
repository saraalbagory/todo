import { createFileRoute } from '@tanstack/react-router'
import CategoryForm from '../../../components/category/CategoryForm'

export const Route = createFileRoute('/categories/$categoryId/edit')({
  component: RouteComponent,
})

function RouteComponent() {
  return <CategoryForm/>;
}
