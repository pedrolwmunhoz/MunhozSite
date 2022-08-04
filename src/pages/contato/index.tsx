import styled from "styled-components"
import Formulario from "../../components/FormularioContato"

const GlobalContainer = styled.div`
    @media only screen and  (max-width : 768px){
        background-color: #1d1d1d;
        max-width: 79vw !important;
        height: 100vh !important;
        margin-left: 21vw;
        div {
            padding-top: 1vh;
            margin-left: 1vw;
        }
        .position{
            width: 10px;
            margin-top: 7vh;
        }
        div h2 {
            font-size: 4rem;
            line-height: 5rem;
            color: #08fdd8;
            max-width: 100%;
            font-family: Arial, Helvetica, sans-serif;
            margin-left: 3vw;
        }
        div span {
            font-family: Arial, Helvetica, sans-serif;
            color: white;
            font-size: 11px;
            display: block;
            margin-left: 2vw;
            width: 90%;
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
        width: 96.5vw !important;
        height: 100vh;
        margin-left: 7.5vw;
        div {
            padding-top: 1vh;
            margin-left: 1vw;
        }
        .position{
            width: 10px;
            margin-top: 7vh;
        }
        div h2 {
            font-size: 5rem;
            line-height: 5rem;
            color: #08fdd8;
            max-width: 100%;
            font-family: Arial, Helvetica, sans-serif;
            margin-left: 3vw;
        }
        div span {
            font-family: Arial, Helvetica, sans-serif;
            color: white;
            font-size: 1.1rem;
            display: block;
            display: block;
            max-width: 670px;
            margin-left: 2vw;
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
        font-size: 0.7rem;
        letter-spacing: 2px;
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
    margin-left: 25px;
`

const htmlTagOption = ["<html>", "<body>", "<h2>", "<p>", "</p>", "</h2>", "<form>", "</form>", "</html>"]

function Contato (){
    return(
        <GlobalContainer>
            <div>
                <HtmlTag className="htmlTag01">{htmlTagOption[0]}</HtmlTag>
                <HtmlTag className="htmlTag02">{htmlTagOption[1]}</HtmlTag>
                <HtmlTag className="htmlposition htmlTag03">{htmlTagOption[2]}</HtmlTag>
                    <h2>Contato</h2>
                    <HtmlTag className="htmlTag02">{htmlTagOption[5]}</HtmlTag>
                    <HtmlTag className="htmlTag02">{htmlTagOption[3]}</HtmlTag>
                    <ContainerForm>
                        <span>
                            Estou interessado em oportunidades freelance - especialmente projetos ambiciosos ou grandes.
                        </span>
                        <span>
                            No entanto se você tiver outra solicitação ou dúvida não hesite me contatar.
                        </span>
                    </ContainerForm>
                    <HtmlTag className="htmlTag02">{htmlTagOption[4]}</HtmlTag>
                    <HtmlTag className="htmlTag02">{htmlTagOption[6]}</HtmlTag>
                    <ContainerForm>
                        <Formulario/>
                    </ContainerForm>

                <HtmlTag className="htmlTag02" >{htmlTagOption[7]}</HtmlTag>
                <HtmlTag>{htmlTagOption[8]}</HtmlTag>
            </div>
        </GlobalContainer>
    )
}

export default Contato