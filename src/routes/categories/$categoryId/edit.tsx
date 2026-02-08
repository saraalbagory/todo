import { createFileRoute } from '@tanstack/react-router'
import CategoryForm from '../../../components/category/CategoryForm'
import { useStore } from '../../../store/store';

export const Route = createFileRoute('/categories/$categoryId/edit')({
  component: RouteComponent,
})

function RouteComponent() {
  const {categoryId}= Route.useParams();
  const id =categoryId;
  const name=useStore().findCategory(id);
  return <CategoryForm  category={{id, name}}/>;
}
