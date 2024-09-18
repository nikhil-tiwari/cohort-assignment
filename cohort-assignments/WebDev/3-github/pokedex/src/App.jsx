import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import Main from './components/Main'

function App() {

  return (
    <div className='antialiased selection:bg-cyan-300 selection:text-cyan-900'>

      <div className="fixed top-0 -z-10 h-full w-full" >
        <div className="absolute top-0 z-[-2] h-screen w-screen bg-gradient-to-b from-gray-900 via-purple-900 to-violet-600"></div>
      </div>

      <div className='container relative'>
        <Header />
        <Hero />
        <Main />
      </div>

      
    </div>
  )
}

export default App
