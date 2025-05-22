import React from 'react'
import './global.css'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Router from './Router'

createRoot(document.getElementById('root') as HTMLElement).render(
  <StrictMode>
    <Router />
  </StrictMode>,
)
