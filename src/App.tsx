import './style/App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Fighters from './components/Fighters'
import Header from './components/Header'
import Rankings from './components/Rankings'
import CreateFightersForm from './components/CreateFighterForm'
import Fighter from './components/FighterHistory'
import FighterHistory from './components/FighterHistory'
// import CreateFightersForm from './components/CreateFighterForm'

function App() {

  return (
    <div className='App'>
      <Header />
      <div className='main-content'>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/fighters' element={<Fighters />} />
        <Route path='/fighters/:id' element={<FighterHistory />} />
        <Route path='/rankings' element={<Rankings />} />
        <Route path='/createFighter' element={<CreateFightersForm />} />
      </Routes>
      </div>
    </div>
  )
}

export default App
