import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { ClerkProvider } from '@clerk/clerk-react'
import SignInPage from './auth/sign-in'
import Home from './Home'
import Dashboard from './dashboard'


// Import your Publishable Key
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

const router =createBrowserRouter([
  {
    // instead of this path: '/', we are going to add children 
    element: <App/>,
    children:[ //sub routes
      {
        path:'/dashboard',
        element:<Dashboard/>
      }
    ]
  },
  {
    path: '/',
    element: <Home/>
  },
  {
    path:'/auth/sign-in',
    element:<SignInPage/>
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl='/'>
    <RouterProvider router={router} />
    </ClerkProvider>
  </StrictMode>,
)
