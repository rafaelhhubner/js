import logo from './logo.svg';
import './App.css';
import Evento from "./components/Evento"
import Form from "./components/Form"

function App() {
  const nome = "Maria"

  return (
      <div className="App">   
        <h1>Testando CSS</h1>
        <Evento />
        <Form />
      </div>
  )
}

export default App;
