import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import Home from './routes/Home/index.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import SobreProjeto from './routes/Sobre-Projeto/index.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: 'home', element: <Home />
      }, {
        path: 'sobre-nos', element: <SobreNos />
      }

    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
