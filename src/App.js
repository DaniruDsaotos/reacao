import React, { useState } from 'react';
import Botao from './components/Botao.jsx';
import IMGfoxhound from './assets/brasil2.jpg';
import "./assets/styles.css";
import { Link } from "react-router-dom";

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
              <button
                onClick={() => alert(`Seu Email: ${email} e Senha: ${password}`)}
                className='loginFormBtn'
              >
                Login
              </button>
            </div>

            <div className='textCenter'>
              <div>
                <span className='txt1'> Não Possui Conta?</span>
                <Link to="/cadastro"><Botao /></Link>
              </div>
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
