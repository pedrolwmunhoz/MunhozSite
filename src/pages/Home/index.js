import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Icone from '../../images/IconeM/icone'
import './styles/index.css'
import './styles/EffectEntrada/index.css'

const frase = ["</html>", "<body>", "<h1>", "<p>", "</p>"]

const GlobalContainer = styled.div`
    background-color: #1d1d1d;
    width: 100% !important;
    height: 100vh !important;
    display: block;
    div{
        padding-top: 8vh;
        padding-left: 8vh;
        font-family: Arial, Helvetica, sans-serif;
        div{
            padding: 0;
            display: inline-block;
        }
        div h1{
            font-size: 5.5rem;
            font-weight: bold;
            line-height: 5rem;
            color: white;
            max-width: 100%;
        }

        div h2{
            font-size: 5.5rem;
            font-weight: bold;
            color: white;
            display: inline-block;
        }
        div h2:hover{
            animation: moveh1 200ms ease infinite alternate-reverse;
            animation-fill-mode: forwards;
        }



        @keyframes  moveh1 {
            from{
                transform: scale(1.3);
                color: #08fdd8;
            }
        }
        div div {
            width: 14vh;
            padding: 0;
            margin-left: 4vh;
            display: inline-block;
        }
        div p, p   {
            color: #8d8d8d;;
            font-size: 1.3rem;
            margin-top: 1rem;
            letter-spacing: 4px;
        }
    }
`
function Home(){
    window.setTimeout(resetClass, 1500)
    function resetClass () {
      const maximo =26
      for (let index = 0; index < maximo ; index++) {
          const elemento = document.querySelector(".effect"+index)
          elemento?.classList.remove("effect"+index)
      }
      const resetEffectEntrada = document.getElementsByClassName("resetEffectEntrada")
      resetEffectEntrada[0]?.classList.remove("resetEffectEntrada")
    }

    return(
        <GlobalContainer>
                <p id="tagDecoration1" className="tagsDecoration">{frase[0]}</p>
                <p id="tagDecoration2" className="tagsDecoration">{frase[1]}</p>

            <div >
                <p id="tagDecoration3" className="tagsDecoration">{frase[2]}</p>
                <div className="resetEffectEntrada">
                    <h2 className="effect1">H</h2>
                    <h2 className="effect2">i</h2>
                    <h2 className="effect3">,</h2>
                    <div className="containerBlock"></div>
                    <h2 className="effect4">I</h2>
                    <h2 className="effect5">'</h2>
                    <h2 className="effect6">m</h2>
                    <div className="iconEffect, effect7"><Icone/></div>
                    <h2 className="effect8">u</h2>
                    <h2 className="effect9">n</h2>
                    <h2 className="effect10">h</h2>
                    <h2 className="effect11">o</h2>
                    <h2 className="effect12">z</h2>
                    <div className="containerBlock"></div>
                    <h2 className="effect13">w</h2>
                    <h2 className="effect14">e</h2>
                    <h2 className="effect15" >b </h2>
                    <div className="containerSpace"></div>
                    <h2 className="effect16">d</h2>
                    <h2 className="effect17">e</h2>
                    <h2 className="effect18">v</h2>
                    <h2 className="effect19">e</h2>
                    <h2 className="effect20">l</h2>
                    <h2 className="effect21">o</h2>
                    <h2 className="effect22">p</h2>
                    <h2 className="effect23">e</h2>
                    <h2 className="effect24">r</h2>
                </div>
                <p id="tagDecoration3" className="tagsDecoration, effect25">{frase[3]}</p>
                <p className="effect26">Front End Developer | ReactJS Expert</p>
                <p id="tagDecoration3" className="tagsDecoration, effect26">{frase[4]}</p>
                
            </div>
                <Link to="/contato"><button type="button" className="botaoContact botaoContactEfeito effect26">Contact me!</button></Link>
        </GlobalContainer>
    )
}


export default Home