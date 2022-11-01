import { Component } from "react";

class Calculadora extends Component {

  //primer paso del ciclo de vida
  constructor(props){

  super(props)

  this.state ={
  numero1: 0, numero2: 0
  }

  this.setNumber1 = this.setNumber1.bind(this)

  this.setNumber2 = this.setNumber2.bind(this)

  }

  setNumber1(e){
  this.setState({
    ...this.state, numero1: e.target.value
    })
  }

  setNumber2(e){
  this.setState({
    ...this.state, numero2: e.target.value
    })
  }

  //segundo paso del ciclo de vida
  render(){

  return(

  <>
    {/* props es una clase por lo cual no se puede descomponer */}
    <h2> { this.props.nombre } </h2> 

    <form>

      <input type="number" name="number1" value={this.state.numero1}
      onChange={ this.setNumber1 }/>

      <input type="number" name="number2" value={this.state.numero2}
      onChange={ this.setNumber2 }/>

      <input type="submit" name="submit" value="Calcular"/>

    </form> 

    <span>Resultado: {Number(this.state.numero1) + Number(this.state.numero2)}</span>

  </>

  )}

  //tercer paso del ciclo de vida
  componentDidMount(){
    console.log("HOLA")
  }

  //cuarto paso del ciclo de vida
  componentWillInmount(){
    //Aquí pongo los eventos que quiero que dejen de ejecutarse cuando no esten en el DOM
  }

}

export default Calculadora