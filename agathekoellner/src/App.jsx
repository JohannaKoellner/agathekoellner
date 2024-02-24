import './App.css'
import Angebote from './components/Angebote'
import Hero from './components/Hero'
import Navbar from './components/Nav/Navbar'
import UeberMich from './components/UeberMich'

function App() {

  return (
    <div className='page'>
      <Navbar />

      <div className='all-content'>
        <Hero />
        <Angebote />
        <UeberMich />
      </div>

    </div>
  )
}

export default App
