import './App.css'
import Angebote from './components/Angebote'
import Hero from './components/Hero'
import Navbar from './components/Nav/Navbar'

function App() {

  return (
    <div className='page'>
      <Navbar />

      <div className='all-content'>
        <Hero />
        <Angebote />
      </div>

    </div>
  )
}

export default App
