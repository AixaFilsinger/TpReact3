
import './App.css'
import Frase from './Components/Frase';
import {Container}   from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  

  return (
    
    <>
    <Container className="my-5 main"><Frase></Frase></Container>
      

    
       <footer className="bg-dark text-light text-center py-4">
        <p>&copy; Todos los derechos reservados</p>
      </footer>
    </>
  )
}

export default App
