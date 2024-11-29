import './index.css'
import pizzaData from './data.js'

import Header from './sections/Header.jsx'
import Main from './sections/Main.jsx'
import Footer from './sections/Footer.jsx'

function App() {
  return (
    <>
      <div className='container'>
        <Header />
        <Main pizzas={pizzaData} />
        <Footer />
      </div>
    </>
  )
}

export default App
