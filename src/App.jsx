import './App.css'
import Button from './components/Button'
import Footer from './components/Footer'
import Hero from './components/Hero'
import NavBar from './components/NavBar'

function App() {
 const sayHello = (myNumber) =>{
    alert('Hello' + myNumber)
 }

  return (
    <>
    <Button name = "Edit" color = "btn btn-warning" sayHello = {sayHello}/>
    <Button name = "Delete" color = "btn btn-danger"/>
    <Button name = "Rusticate" color = "btn btn-dark"/>
    {/* <NavBar/>
    <Hero/>
    <Footer/> */}
     
    </>
  )
}

export default App
