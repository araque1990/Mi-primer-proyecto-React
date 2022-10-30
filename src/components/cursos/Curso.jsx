const Curso = ({titulo, imagen, parrafo}) => {
	return (
		<section>
  		<img src = { imagen } alt = { titulo }/>
	  	<h2>{ titulo }</h2>
		  <p>{ parrafo }</p>
		</section>
	)
}

export default Curso