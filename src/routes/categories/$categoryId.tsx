import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/categories/$categoryId')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>List of ToDo of that category</div>
}
