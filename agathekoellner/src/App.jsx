import './App.css'
import Angebote from './components/Angebote'
import Hero from './components/Hero'
import Navbar from './components/Nav/Navbar'
import UeberMich from './components/UeberMich'
import Kontakt from './components/Kontakt'
import Testimonials from './components/Testimonials'

function App() {

  return (
    <div className='page'>
      <Navbar />

      <div className='all-content'>
        <Hero />
        <Angebote />
        <Testimonials />
        <UeberMich />
        <Kontakt />
      </div>

    </div>
  )
}

export default App
