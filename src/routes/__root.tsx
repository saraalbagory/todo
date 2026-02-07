import * as React from 'react'
import { Outlet, createRootRoute } from '@tanstack/react-router'
import Navbar from '../components/common/Navbar'
import { Toaster } from 'react-hot-toast'

export const Route = createRootRoute({
  component: RootComponent,
})

function RootComponent() {
  return (
    <React.Fragment>
     <Navbar/>
     <main>
      <Toaster position="top-right" />
       <Outlet />
     </main>
     
    </React.Fragment>
  )
}
