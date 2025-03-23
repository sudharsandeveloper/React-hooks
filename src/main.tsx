import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Todo from './components/Todo.tsx'
import InputView from './components/InputView.tsx'
import ColorPicker from './components/ColorPicker.tsx'
import FormData from './components/FormData.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}/>
        <Route path='/todo' element={<Todo />}/>
        <Route path='/input' element={<InputView />} />
        <Route path='/color-picker' element={<ColorPicker />} />
        <Route path='/register' element={<FormData />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
