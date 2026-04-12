import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
//import './index.css'
import App from './App.jsx'
import SpellsPage from './pages/SpellsPage.jsx'
import SpellDetailPage from './pages/SpellDetailPage.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <SpellsPage />
      },
      {
        path: 'spells/:id',
        element: <SpellDetailPage />
      }
    ]
  }
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
