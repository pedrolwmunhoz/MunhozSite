import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Icone from '../../images/IconeM/icone'
import './styles/index.css'
import './styles/EffectEntrada/index.css'
import './teste'

const text = document.getElementsByClassName("textContactStyle")
const home = document.getElementsByClassName("globalContainer")
const botaoContact = document.getElementsByClassName("botaoContact")

function effectTextColorContact(){
    botaoContact[0].addEventListener("mouseover", function(event){
        setTimeout(setTextBlack, 5)
        function setTextBlack() {
            console.log("teste")
            text[0].style.color = "#1d1d1d";
        }
    })
    home[0].addEventListener("mouseover", function(event){
        console.log("teste1")
        text[0].style.color = "#08fdd8";
    })
}

const frase = ["</html>", "<body>", "<h1>", "<p>", "</p>"]

const GlobalContainer = styled.div`
    @media only screen and (max-width : 425px){
        /* Smartphone = widht: 425px | height: 740px */
        margin-left: 20vw;
        div{
            div h2{
                font-size: 40px;

            }
            div div {
                width: 12vw;
                margin-left: 2vh;
            }
            .frontEndStyle {
                font-size: 0.6rem;
                margin-top: 2vh;
                letter-spacing: 2px;
                margin-left: 4vw;
            }
        }
    }
    @media only screen and (min-width : 426px)and (max-width : 768px){
        /* Tablet = widht: 768px | height: 740px */

        margin-left: 9vw;
        div{
            div h2{
                font-size: 5.5rem;
            }
            div div {
                width: 13vw;
                margin-left: 4vh;
            }
            .frontEndStyle {
                font-size: 1.1rem;
                margin-top: 2vh;
                letter-spacing: 4px;
                margin-left: 4vw;
            }
        }
    }
    @media only screen and (min-width : 769px) and (max-width : 1024px){
        /* Desktop = widht: 1024px | height: 740px */
        margin-left: 9vw;
        div{
            div h2{
                font-size: 5.5rem;

            }
            div div {
                width: 08vw;
                margin-left: 4vh;
            }
            .frontEndStyle {
                font-size: 1.3rem;
                margin-top: 2vh;
                letter-spacing: 4px;
                margin-left: 4vw;
            }
        }

    }

    @media only screen and (min-width : 1025px) {
        /* Desktop Size = min-widht: 1024px */
        margin-left: 7vw;
        div{
            div h2{
                font-size: 5.5rem;

            }
            div div {
                width: 08vw;
                margin-left: 4vh;
            }
            .frontEndStyle {
                font-size: 1.3rem;
                margin-top: 2vh;
                letter-spacing: 4px;
                margin-left: 4vw;
            }
        }

    }
/* ----------------CSS DEFAULT---------------- */
        display: block;
        height: 100vh;
        div{
            div h2{
                font-weight: bold;
                color: white;
                display: inline-block;
            }

            .frontEndStyle {
                color: #8d8d8d;
                margin-left: 6vw;
            }
        }
        .containerButtonContact {
            margin-top: 2%;
            margin-left: 6vw;
        }
        div {
            font-family: Arial, Helvetica, sans-serif;
            div div {
                padding: 0;
                display: inline-block;
            }
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
`




function Home(){
    setTimeout(effectTextColorContact, 300)
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
        <GlobalContainer className="globalContainer">
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
                    <div className="containerIcone effect7"><Icone/></div>
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
                <p id="tagDecoration4" className="tagsDecoration effect26">{frase[4]}</p>

            </div>
            <div className="containerButtonContact">
                <div className="containerContact">
                    <Link to="/contato">
                        <button type="button" className="botaoContact botaoContactEfeito effect26"><p className="textContactStyle effect26">Contact me!</p></button>
                    </Link>
                </div>
            </div>
        </GlobalContainer>
    )
}


export default Home