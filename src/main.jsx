import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ProjectProvider } from './components/ProjectContext'

import '../src/assets/styles/globals.scss'
import AppRouter from './components/AppRouter'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ProjectProvider>     
        <AppRouter />  
    </ProjectProvider>
  </StrictMode>,
)
