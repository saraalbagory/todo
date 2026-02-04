import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/categories/newCategory')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>create category form</div>
}
