import { Routes, Route } from 'react-router-dom'
import Pokedex from './routes/pokedex'

function App() {
  return (
    <div className="w-full flex flex-col bg-slate-800 min-h-screen">
      <Routes>
        <Route path="/" element={<Pokedex />} />
      </Routes>
    </div>
  )
}

export default App
