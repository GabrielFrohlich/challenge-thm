import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './App.scss'

import App from './App.jsx'

import Home from './routes/Home/index.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import SobreProjeto from './routes/Sobre-Projeto/index.jsx'
import ComoFunciona from './routes/ComoFunciona/index.jsx'
import Contato from './routes/Contato/index.jsx'
import Funcionalidades from './routes/Funcionalidades/index.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: 'home', element: <Home />
      },
      {
        path: 'como-funciona', element: <ComoFunciona />
      },
      {
        path: 'functionalidades', element: <Funcionalidades />
      },
      {
        path: 'contato', element: <Contato />
      },
      {
        path: 'sobre-o-projeto', element: <SobreProjeto />
      }

    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
