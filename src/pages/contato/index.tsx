import styled from "styled-components"
import Formulario from "../../components/FormularioContato"

const GlobalContainer = styled.div`
    background-color: #1d1d1d;
    width: 100% !important;
    height: 100vh;
    display: block;
    padding-left: 2vh;

    .position{
        width: 10px;
        margin-top: 7vh;
    }
    h2 {
        font-size: 5rem;
        line-height: 5rem;
        color: #08fdd8;
        max-width: 100%;
        font-family: Arial, Helvetica, sans-serif;
        padding-left: 7vh;
    }
    span {
        font-family: Arial, Helvetica, sans-serif;
        color: white;
        font-size: 1.1rem;
        display: block;
        display: block;
        max-width: 670px;
    }
    .htmlTag01{
        padding-top: 3vh;
    }
    .htmlTag02{
        padding-left: 3vh;
    }
    .htmlTag03{
        margin-top: 2vh;
        padding-top: 3vh;
    }
    .htmlposition{
        padding-left: 5vh;
    }
`
const HtmlTag = styled.p`
    color: #535252;;
    font-size: 1.1rem;
    letter-spacing: 2px;
    font-family: 'Caveat';
`
const ContainerForm = styled.div`
    padding-left: 5vh;
    margin-left: 20px;
`

const htmlTagOption = ["<html>", "<body>", "<h2>", "<p>", "</p>", "</h2>", "<form>", "</form>", "</html>"]

function Contato (){
    return(
        <GlobalContainer>
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
                        No entanto se você tiver outra solicitação ou dúvida, não hesite me contatar.
                    </span>
                </ContainerForm>
                <HtmlTag className="htmlTag02">{htmlTagOption[4]}</HtmlTag>
                <HtmlTag className="htmlTag02">{htmlTagOption[6]}</HtmlTag>
                <ContainerForm>
                    <Formulario/>
                </ContainerForm>
            
            <HtmlTag className="htmlTag02" >{htmlTagOption[7]}</HtmlTag>
            <HtmlTag>{htmlTagOption[8]}</HtmlTag>
        </GlobalContainer>
    )
}

export default Contato