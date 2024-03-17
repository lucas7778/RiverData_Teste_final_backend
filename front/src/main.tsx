import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { QueryClientProvider } from '@tanstack/react-query'
import { queryClient } from './queryClientProvider.ts'
import { RouterProvider } from 'react-router-dom'
import { routers } from './routes/Router.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={routers()} />
    </QueryClientProvider>
  </React.StrictMode>,
)


