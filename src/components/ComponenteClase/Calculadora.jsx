// hook useState; este nos permite usar el estado de los componentes funcionales
// useState es una funcion que nos retorna un array y este arreglo contiene dos valores,
// el estado del componente y una funcion que nos permite actualizar ese estado
import { useState } from "react";

const Calculadora = ({ nombre }) => {

  const [state, setState] = useState({
    numero1: 0, numero2: 0
  })
  
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