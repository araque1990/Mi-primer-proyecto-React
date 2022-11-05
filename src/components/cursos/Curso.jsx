import "./Curso.css"
import { useRef } from "react"

const Curso = ({titulo, imagen, parrafo}) => {

	//useRef nos permite crear una referencia hacia un elemento del virtualDom
	const miReferencia = useRef()
	const desactivarImagen = () => {
			miReferencia.current.classList.add("desactivar")
	}
	
	return (
		<section>
  		<img ref={ miReferencia } src = { imagen } alt = { titulo }/>
	  	<h2>{ titulo }</h2>
		  <p>{ parrafo }</p>
			<button onClick={desactivarImagen}>Desactivar</button>
		</section>
	)
}

export default Curso