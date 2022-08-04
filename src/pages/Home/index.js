import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Icone from '../../images/IconeM/icone'
import './styles/index.css'
import './styles/EffectEntrada/index.css'

const frase = ["</html>", "<body>", "<h1>", "<p>", "</p>"]

const GlobalContainer = styled.div`
    @media only screen and  (max-width : 768px){
        background-color: #1d1d1d;
        display: block;
        height: 100vh;
        margin-left: 21vw;
        div{
            padding-top: 8vh;
            font-family: Arial, Helvetica, sans-serif;
            div{
                padding: 0;
                display: inline-block;
            }

            div h2{
                font-size: 2.6rem;
                font-weight: bold;
                color: white;
                display: inline-block;
            }
            .effectBlue:hover{
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
                width: 7vh;
                padding: 0;
                margin-left: 2vh;
                display: inline-block;
            }
            .frontEndStyle {
                color: #8d8d8d;
                font-size: 0.7rem;
                margin-top: 1vh;
                letter-spacing: 2px;
                margin-left: 4vw;
            }
        }
    }
    @media only screen  and (min-width : 768px)  {
        background-color: #1d1d1d;
        display: block;
        height: 100vh;
        margin-left: 9vw;
        div{
            padding-top: 8vh;
            font-family: Arial, Helvetica, sans-serif;
            div{
                padding: 0;
                display: inline-block;
            }
            div h2{
                font-size: 5.5rem;
                font-weight: bold;
                color: white;
                display: inline-block;
            }
            .effectBlue:hover{
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
            .frontEndStyle {
                color: #8d8d8d;
                font-size: 1.3rem;
                margin-top: 1vh;
                letter-spacing: 4px;
                margin-left: 4vw;
            }
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
          if(index<25){
            elemento?.classList.add("effectBlue")
          }
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
                <div className="containerEffect">
                    <h2 className="effect1">H</h2>
                    <h2 className="effect2">i</h2>
                    <h2 className="effect3">,</h2>
                    <div className="containerBlock"></div>
                    <h2 className="effect4">I</h2>
                    <h2 className="effect5">'</h2>
                    <h2 className="effect6">m</h2>
                    <div className="iconEffect effect7"><Icone/></div>
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
                <p id="tagDecoration3" className="tagsDecoration effect25">{frase[3]}</p>
                <p className="effect26 frontEndStyle">Front End Developer | ReactJS Expert</p>
                <p id="tagDecoration3" className="tagsDecoration effect26">{frase[4]}</p>

            </div>
                <Link to="/contato"><button type="button" className="botaoContact botaoContactEfeito effect26">Contact me!</button></Link>
        </GlobalContainer>
    )
}


export default Home