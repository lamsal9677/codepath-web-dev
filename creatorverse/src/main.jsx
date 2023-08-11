import React from 'react'
import * as ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import App from './App.jsx'
import './index.css'
import ErrorPage from './pages/error-page.jsx'
import AddCreator from './pages/AddCreator.jsx'
import EditCreator from './pages/EditCreator.jsx'
import ShowCreators from './pages/ShowCreators.jsx'
import ViewCreators from './pages/ViewCreator.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/add-creators',
        element: <AddCreator />
      },
      {
        path: '/edit-creators',
        element: <EditCreator />
      },
      {
        path: '/show-creators',
        element: <ShowCreators />
      },
      {
        path: '/view-creators',
        element: <ViewCreators />
      },
      {
        path: '/view-creators/:creatorId',
        element: <ViewCreators />
      },
      {
        path: '/edit-creators/:creatorId',
        element: <EditCreator />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
