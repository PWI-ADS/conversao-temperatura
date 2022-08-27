import { useState } from "react"

const Conversao = () => {
    const [temperatura, setTemperatura] = useState('')
    const [Useroption, setUserOption] = useState(" ")
    const [result, setresult] = useState('')

    const resultado = () => {
         if(Useroption === "Celsius"){
            const CT = ((temperatura * 9) / 5) + 32
            setresult(CT + 'F')
         } else{
           const ct = ((temperatura - 32) * 5) /9
           setresult (ct + "C")
         }
       }
       

    return(
        <div>
          <h1>Conversor de Temperatura</h1>
          Tempreratura: <br/>
          <input type="number" onChange={(event) => setTemperatura(event.target.value)}/>
        <label>
          <input type="radio" value="Fahrenheit"
          checked={Useroption === "Fahrenheit"}
          onChange={(event) => setUserOption(event.target.value)}/>Fahrenheit (F)
        </label>
    
        <label>
          <input type="radio" value="Celsius"
          checked={Useroption === "Celsius"}
          onChange={(event) => setUserOption(event.target.value)}/>Celsius (C)
        </label>
        <br/>
        <br/>
        <input type="button" value="Converter" onClick={resultado}/>
        <br/><br/>
        O resultado é {result}
        </div>
      )
}

export default Conversao;