import './App.css'
import PaqueteCursos from './components/cursos/PaqueteCursos'
import Header from './components/header/Header'
import Logo from './components/Logo/Logo'

function App() {
  return (
    <section>
      <Header />
      <h1>Mis Cursos</h1>
      <Logo />
      <PaqueteCursos />
    </section>
  )
}

export default App
