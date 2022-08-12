import styled from "styled-components"
import Formulario from "../../components/FormularioContato"
import "../Home/teste"

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

const GlobalContainer = styled.div`
    @media only screen and  (min-width : 1024px){
        /* Desktop = widht: 1024px | height: 740px */
        margin-left: 7.5vw;
        height: 100vh;
        .containerAjust {
            padding-top: 1vh;
            margin-left: 2vw;
        }
        .containerContato {
            margin-left: 3vw;
        }
        .containerTexto {
            margin-left: 3vw;
            max-width: 42vw;

        }
        .position {
            width: 10px;
            margin-top: 7vh;
        }
        h2 {
            font-size: 4rem;
        }
        span {
            font-size: 1.1rem;
        }

        .htmlTag02{
            margin-left: 1.4vw;
        }
        .htmlTag03{
            margin-top: 3vh;
        }
        .htmlposition{
            margin-left: 2vw;
        }
    }

/* ----------------CSS DEFAULT---------------- */
        h2 {
            color: #08fdd8;
            font-family: Arial, Helvetica, sans-serif;
            display: inline-block;
        }
        span {
            font-family: Arial, Helvetica, sans-serif;
            color: white;
            display: inline-block;
        }
        .textSpace {
            margin-left: 0.5%;
        }

`

const HtmlTag = styled.p`
    @media only screen and  (max-width : 768px){
        color: #535252;;
        font-size: 0.6rem;
        letter-spacing: 1px;
        font-family: 'Caveat';
    }
    @media only screen and  (min-width : 768px){
        color: #535252;;
        font-size: 1.1rem;
        letter-spacing: 2px;
        font-family: 'Caveat';
    }

`
const ContainerForm = styled.div`
    #frase {
        padding-left: 0 !important;
        padding-bottom: 1%;
        background-color: #0000008f;
        display: inline-block
    }
    .containerButton {
        button {
            margin: 0;
            margin-left: 10vw;
        }
    }
    @media only screen and (min-width: 1024px) and (min-height: 740px){
        .containerButtonMensagem {
            margin-left: 52.7%;
        }
    }
        @media only screen and (min-width: 1440px) and (min-height: 986px){
    .containerButtonMensagem {
        margin-left: 31.7%;
    }
    }
`

const htmlTagOption = ["<html>", "<body>", "<h2>", "<p>", "</p>", "</h2>", "<form>", "</form>", "</html>"]

function Contato (){
    setTimeout(effectTextColorContact, 300)
    return(
        <GlobalContainer className="globalContainer">
            <div className="containerAjust">
                <HtmlTag className="htmlTag01">{htmlTagOption[0]}</HtmlTag>
                <HtmlTag className="htmlTag02">{htmlTagOption[1]}</HtmlTag>
                <HtmlTag className="htmlposition htmlTag03">{htmlTagOption[2]}</HtmlTag>
                    <div className="containerContato">
                        <h2 className="effect1">C</h2>
                        <h2 className="effect2">o</h2>
                        <h2 className="effect3">n</h2>
                        <h2 className="effect4">t</h2>
                        <h2 className="effect5">a</h2>
                        <h2 className="effect6">t</h2>
                        <h2 className="effect8">o</h2>
                    </div>
                    <HtmlTag className="htmlTag02">{htmlTagOption[5]}</HtmlTag>
                    <HtmlTag className="htmlTag02">{htmlTagOption[3]}</HtmlTag>
                    <ContainerForm>
                        <div className="containerTexto">
                            <span className="effect29">
                                Estou interessado em oportunidades freelance – especialmente projetos ambiciosos ou grandes.
                                No entanto, se você tiver alguma dúvida, não hesite em me contatar!
                            </span>
                        </div>
                    </ContainerForm>
                    <HtmlTag className="htmlTag02">{htmlTagOption[4]}</HtmlTag>
                    <HtmlTag className="htmlTag02">{htmlTagOption[6]}</HtmlTag>
                    <ContainerForm>
                        <div className="textSpace">
                            <Formulario/>
                        </div>
                        <div className="containerContact"> 
                            <button type="button" className="botaoContact botaoContactEfeito effect26">
                                <p className="textContactStyle effect26">Enviar Mensagem!</p>
                            </button>
                        </div>
                    </ContainerForm>
                <HtmlTag className="htmlTag02" >{htmlTagOption[7]}</HtmlTag>
                <HtmlTag>{htmlTagOption[8]}</HtmlTag>
            </div>
        </GlobalContainer>
    )
}

export default Contato