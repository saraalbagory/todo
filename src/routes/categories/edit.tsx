import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/categories/edit')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/categories/edit"!</div>
}
