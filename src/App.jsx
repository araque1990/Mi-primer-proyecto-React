import './App.css'
import PaqueteCursos from './components/cursos/PaqueteCursos'
import Header from './components/header/Header'
import Logo from './components/main/Logo'

function App() {
  return (
    <section>
      <Header />
      <h1>Mi primer proyecto con Vite + React</h1>
      <Logo />

      <h1>Mis Cursos</h1>
      <PaqueteCursos />
    </section>
  )
}

export default App
