import React, { useState } from "react"
import foto from "../imgReacao.png"

function Botao(props) {
  const [clicado, setClicado] = useState(false)
  const [cont, setCont] = useState(0)
  const [rng,setRng] = useState("RNG")
  
  return (
    <>
      { 
        clicado
        ? <img src={foto} alt="" />
        : <button onClick={() => setClicado(true)}>Jonas</button>
      }

      <button onClick={() => setCont(cont + 1)}>contador:{cont}</button>
      <button onClick={() => setRng(Math.random()*100)}>froggers {rng}</button>
    </>
  )
}

export default Botao