import { Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home'
import { About } from './pages/About.jsx'
import './App.css'
import { Navbar } from './components/nAVBAR.jsx'
import { Products } from './pages/Products.jsx'
import { Contact } from './pages/Contact.jsx'
import { Footer } from './components/Footer.jsx'
import { Error } from './pages/Error.jsx'

function App() {

  return (
    <>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/products' element={<Products></Products>}></Route>
        <Route path='/contact' element={<Contact></Contact>}></Route>
        <Route path='/*' element={<Error></Error>}></Route>
      </Routes>
      <Footer></Footer>
    </>
  )
}

export default App
