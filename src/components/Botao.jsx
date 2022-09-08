import React from "react";
import { useState } from "react";
import Reacao from "../imgReacao.png";

function Botao() {
    // const [sex, setSex] = useState(false)
    let sex = false

    return(
        <>
            {
                sex 
                ? <img src={Reacao} alt="Reação"></img>
                : <button onClick={() => sex = true}>Criar conta</button> 
            }
        </>
    )
}
export default Botao