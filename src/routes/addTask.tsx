import { createFileRoute } from '@tanstack/react-router'
import CreateTodoPage from '../pages/CreateTodoPage'

export const Route = createFileRoute('/addTask')({
  component: RouteComponent,
})

function RouteComponent() {
  return <CreateTodoPage/>;
}
