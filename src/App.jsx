import './App.css'
import Calculadora from './components/ComponenteClase/Calculadora'
import Header from './components/header/Header'
import Logo from './components/main/Logo'

function App() {
  return (
    <section>
      <Header />
      <h1>Ejemplo de Calculadora con Clases</h1>
      <Logo />
      <Calculadora />
    </section>
  )
}

export default App
