import './App.css'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Home from './pages/Home/Home'

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Home />
      </main>
      <Footer />
    </div>
  )
}

export default App
