// hook useState; este nos permite usar el estado de los componentes funcionales
// useState es una funcion que nos retorna un array y este arreglo contiene dos valores,
// el estado del componente y una funcion que nos permite actualizar ese estado
import { useState, useEffect } from "react";

const Calculadora = ({ nombre }) => {

  const [state, setState] = useState({
    numero1: 0, numero2: 0
  })

  //useEffect se ejecuta cuando el componente va a ser construido
  //el segundo parametro es un array opcional.
  //El array será el listado de todos los estados que quiero controlar como disparadores de la funcion que escribí en el useEffect
  //si no le paso array como segundo parametro el useEffect vuelve a correr siempre que algun estado se actualice
  //si le paso un array vacio, el useEffect no vuelve a correr
  useEffect(() => {
    console.log(new Date().getTime())
    return () => {
      //Aquí va todo lo que quieras ejecutar cuando el componente se desmonte
    }
  },[])
  
  const setNumber1 = (e) => {
    setState ({
      ...state, numero1: e.target.value
    })
  }
  
  const setNumber2 = (e) => {
    setState ({
      ...state, numero2: e.target.value
    })
  }

  return(

  <>
    <h2> { nombre } </h2> 

    <form>

      <input type="number" name="number1" value={state.numero1}
      onChange={ setNumber1 }/>

      <input type="number" name="number2" value={state.numero2}
      onChange={ setNumber2 }/>

    </form> 

    <span>Resultado: {Number(state.numero1) + Number(state.numero2)}</span>

  </>

  )
}

export default Calculadora