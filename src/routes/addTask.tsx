import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/addTask')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>create a new to do item</div>
}
