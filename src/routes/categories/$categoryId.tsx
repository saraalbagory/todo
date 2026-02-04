import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/categories/$categoryId')({
  component: RouteComponent,
})

function RouteComponent() {
  //TODO : in the service fetch the list of ToDo of that category and display them here
  return <div>List of ToDo of that category</div>
}
