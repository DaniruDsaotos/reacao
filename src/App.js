import React, { useState } from 'react';
import Botao from './components/Botao';
import IMGfoxhound from './assets/brasil2.jpg';
import "./assets/styles.css";

const title = "Bem Vindo"

function App() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  return (
    <div className='container'>
      <div className='containerLogin'>
        <div className='wrapLogin'>
          <form className='loginForm'>

            <span className='loginFormTitle'>{title}</span>

            <span className='loginFormTitle'>
              <img
                src={IMGfoxhound}
                alt="Fox Hound Logo"
              />
            </span>

            <div className='wrapInput'>
              <input
                className={email !== "" ? "hasVal input" : "input"}
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
              />
              <span className='focusInput' data-placeholder='Email'></span>
            </div>

            <div className='wrapInput'>
              <input
                className={password !== "" ? "hasVal input" : "input"}
                type="password"
                value={password}
                onChange={e => setPassword(e.target.value)}
              />
              <span className='focusInput' data-placeholder='Password'></span>
            </div>

            <div className='containerLoginFormBtn'>
              <button className='loginFormBtn'>Login</button>
            </div>

            <div className='textCenter'>
              <span className='txt1'> Não Possui Conta?</span>
              <a className='txt2' href='#'>Criar conta</a>
            </div>

          </form>
        </div>
      </div>
    </div>


    /*<>
      <p>{jarbas}</p>
      <Botao />
    </>*/
  );
}

export default App;
