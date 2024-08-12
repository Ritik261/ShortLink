import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import { Children } from 'react'
import AppLayout from './layouts/app-layout'
import LandingPage from './pages/landingpage'
import Auth from './pages/auth'
import Dashboard from './pages/dashboard'
import Link from './pages/link'
import Redirect from './pages/redirect'


const router = createBrowserRouter([
  {
    element:<AppLayout/>,
    children :[
      {
      path: '/',
      element: <LandingPage />
    },
      {
      path: '/auth',
      element: <Auth />
    },
      {
      path: '/dashboard',
      element: <Dashboard />
    },
      {
      path: '/link/:id',
      element: <Link />
    },
      {
      path: '/:id',
      element: <Redirect />
    },
    
  
  ]
  }
])
function App() {
  return (
    <>
     <RouterProvider router={router}/>
    </>
  )
}

export default App
