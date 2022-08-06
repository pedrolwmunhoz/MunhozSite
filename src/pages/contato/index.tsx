import styled from "styled-components"
import Formulario from "../../components/FormularioContato"

const GlobalContainer = styled.div`
    @media only screen and  (max-width : 768px){
        background-color: #1d1d1d;
        max-width: 79vw !important;
        height: 100vh !important;
        margin-left: 21vw;
        .containerAjust {
            padding-top: 1vh;
            margin-left: 4%;
        }
        .containerContato {
            margin-left: 3%;
        }
        .containerTexto {
            margin-left: 3%;
            max-width: 67vw;
        }
        .position{
            width: 10px;
            margin-top: 7vh;
        }
        h2 {
            font-size: 3rem;
            color: #08fdd8;
            max-width: 100%;
            font-family: Arial, Helvetica, sans-serif;
            display: inline-block;

        }
        span {
            font-family: Arial, Helvetica, sans-serif;
            color: white;
            font-size: 10px;
            display: inline-block;
        }
        .textSpace {
            margin-left: 0.5%;
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

    @media only screen and  (min-width : 768px){
        background-color: #1d1d1d;
        margin-left: 7.5vw;
        .containerAjust {
            padding-top: 1vh;
            margin-left: 2.6%;
        }
        .containerContato {
            margin-left: 3%;
        }
        .containerTexto {
            margin-left: 3%;
            max-width: 42vw;
        }
        .position {
            width: 10px;
            margin-top: 7vh;
        }
        h2 {
            font-size: 5rem;
            color: #08fdd8;
            max-width: 100%;
            font-family: Arial, Helvetica, sans-serif;
            display: inline-block;
        }
        span {
            font-family: Arial, Helvetica, sans-serif;
            color: white;
            font-size: 1.1rem;
            display: inline-block;
        }
        .textSpace {
            margin-left: 0.5%;
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
`

const htmlTagOption = ["<html>", "<body>", "<h2>", "<p>", "</p>", "</h2>", "<form>", "</form>", "</html>"]

function Contato (){
    return(
        <GlobalContainer>
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
                        <button type="button" className="botaoContact botaoContactEfeito effect28">Enviar!</button>
                    </ContainerForm>
                <HtmlTag className="htmlTag02" >{htmlTagOption[7]}</HtmlTag>
                <HtmlTag>{htmlTagOption[8]}</HtmlTag>
            </div>
        </GlobalContainer>
    )
}

export default Contato