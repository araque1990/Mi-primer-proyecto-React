import Curso from "./Curso"

const PaqueteCursos = () => {
  return (
		<>
		<Curso
      imagen = "https://ed.team/_next/image?url=https%3A%2F%2Fedteam-media.s3.amazonaws.com%2Fcourses%2Fmedium%2Fa1fe448a-6f60-4487-a050-de38d43e3c57.jpg&w=1080&q=75"
      titulo = "Crea tu sitio web sin código con Webflow"
      parrafo = "Aprende a desarrollar sitios web hermosos y personalizables con todo el poder de HTML, CSS y JavaScript, pero sin escribir una sola línea de código."
      />
      
      <Curso
      imagen = "https://ed.team/_next/image?url=https%3A%2F%2Fedteam-media.s3.amazonaws.com%2Fcourses%2Fmedium%2F10caad5c-6b94-410c-921e-0f341d4e6115.png&w=1080&q=75"
      titulo = "PHP 8 desde cero (2022)"
      parrafo = "Aprende la última versión de PHP, el lenguaje de programación backend más importante de la web."
      />
      
      <Curso
      imagen = "https://ed.team/_next/image?url=https%3A%2F%2Fedteam-media.s3.amazonaws.com%2Fcourses%2Fmedium%2F9341e15b-af99-4356-92fb-453f15c1d9e5.png&w=1080&q=75"
      titulo = "Figma desde cero (2022)"
      parrafo = "Domina la principal herramienta de diseño y prototipado colaborativo en tiempo real del mercado"
      />
      
      <Curso
      imagen = "https://ed.team/_next/image?url=https%3A%2F%2Fedteam-media.s3.amazonaws.com%2Fcourses%2Fmedium%2F3b96d130-ada0-4c9a-af68-2d5ce89830fb.png&w=1080&q=75"
      titulo = "Gestión de trabajo en equipo con Jira"
      parrafo = "Organiza los proyectos y tareas de tu equipo con Jira, una de las herramientas de gestión más utilizadas por las empresas."
      />

      <Curso
      imagen = "https://ed.team/_next/image?url=https%3A%2F%2Fedteam-media.s3.amazonaws.com%2Fcourses%2Fmedium%2F2a9110bb-f14e-45f7-a6e5-6caecd8267d6.png&w=1080&q=75"
      titulo = "Creación de API REST con Node.js"
      parrafo = "Aprende a crear APIs con los módulos Built-in de Node.js y con el framework Express JS."
      />

      <Curso
      imagen = "https://ed.team/_next/image?url=https%3A%2F%2Fedteam-media.s3.amazonaws.com%2Fcourses%2Fmedium%2Fb4b80bd3-4fc0-45f1-946c-a1386a8e8221.png&w=1080&q=75"
      titulo = "React desde cero 2022"
      parrafo = "Crea interfaces de usuario reutilizables y basadas en componentes con la librería para el desarrollo frontend más usada en el mundo."
      />
		</>
  )
}

export default PaqueteCursos