import Header from './components/Header'
import Footer from './components/Footer'
import Authendication from './container/Authendication'
import { Route, Router, Routes } from 'react-router-dom'

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/authendication"  element={<Authendication/>}/>
      </Routes>
      <Footer/>
    </>

  )
}

export default App
