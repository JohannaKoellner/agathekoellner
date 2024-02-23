import './App.css'
import Hero from './components/Hero'
import Navbar from './components/Nav/Navbar'

function App() {

  return (
    <div className='page'>
      <Navbar />

      <div className='content'>
        <Hero />
      </div>

    </div>
  )
}

export default App
