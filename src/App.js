import React from "react";

class conversao extends React.Component{
  constructor(){
    super()
    this.state = {
      temperatura: 0,
      userOption: undefined,
      valorConversao: undefined
    }
  }
  
  onChangeTemperatura(event){
    const Temperatura = event.target.value
    this.setState({
      temperatura: Temperatura
    })
  }
  
  onChangeOption(event){
    const newOpti = event.target.value
    this.setState({
      userOption: newOpti
    })
  }

  resultado(){
   let Valor;
    if(this.state.userOption === "Celsius"){
       const CT = ((this.state.temperatura * 9) / 5) + 32
       Valor = CT + 'F'
    } else{
      const ct = ((this.state.temperatura - 32) * 5) /9
      Valor = ct + "C"
    }
    this.setState({
      valorConversao: Valor
    })
  }
  
render(){
  return(
    <div>
      <h1>Conversor de Temperatura</h1>
      Tempreratura: <br/>
      <input type="number" onChange={(event) => this.onChangeTemperatura(event)}/>
    <label>
      <input type="radio" value="Fahrenheit"
      checked={this.state.userOption === "Fahrenheit"}
      onChange={(event) => this.onChangeOption(event)}/>Fahrenheit (F)
    </label>

    <label>
      <input type="radio" value="Celsius"
      checked={this.state.userOption === "Celsius"}
      onChange={(event) => this.onChangeOption(event)}/>Celsius (C)
    </label>
    <br/>
    <br/>
    <input type="button" value="Converter"
        onClick={() => this.resultado()}/>
    <br/><br/>
    Resultado:{this.state.valorConversao}  
    </div>
  )
}
}

export default conversao;
