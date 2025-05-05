import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '../src/assets/styles/globals.scss'
import AppRouter from './components/AppRouter'

createRoot(document.getElementById('root')).render(
  
  <StrictMode>
    <div className='appContainer'>
      <AppRouter />  
    </div>    
  </StrictMode>,
)
