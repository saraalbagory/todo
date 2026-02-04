import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/$todoId')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>task details</div>
}
