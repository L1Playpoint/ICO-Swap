import Footer from './Components/Footer'
import Main from './Components/Main'
import Navbar from './Components/Navbar'

function App () {
  return (
    <div className='App'>
      <header>
        <Navbar />
      </header>

      <main>
        <Main />
      </main>

      <footer>
        <Footer/>
      </footer>
    </div>
  )
}

export default App
