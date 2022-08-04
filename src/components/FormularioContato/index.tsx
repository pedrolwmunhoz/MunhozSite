import styled from "styled-components"

const GlobalContainer = styled.div`
    display: inline-block;
    margin-left: 2vw !important;

`
const Form = styled.form`
    @media only screen and  (max-width : 768px){
        .caixaTexto {
            padding-bottom: 18vh;

        }
        .inputStyled {
            background-color: #2b2b2b;
            font-size: 11px;
            border: 0;
            color: #8d8d8d;
            padding: 10px;
        }
    }
    @media only screen and  (min-width : 768px){
        .caixaTexto {
            padding-bottom: 25vh;

        }
        .inputStyled {
            margin: 0 !important;
        }
    }

`
const Inputs = styled.input`
    @media only screen and  (max-width : 768px){
        width: 60vw;
        margin-bottom: 4px;
        padding: 6px;
        display: block;
        background-color: #2b2b2b;
        font-size: 11px;
        border: 0;
        color: #8d8d8d;
        padding: 20px;
    }
    @media only screen and  (min-width : 768px){
        width: 630px;
        margin-bottom: 10px;
        padding: 6px;
        display: block;
        background-color: #2b2b2b;
        font-size: 16px;
        border: 0;
        color: #8d8d8d;
        padding: 20px;
    }
`

function Formulario(){
    return(
        <GlobalContainer>
            <Form>
                <Inputs id="inputStyled" type="text" placeholder="Nome"></Inputs>
                <Inputs id="inputStyled" type="email" placeholder="Email"></Inputs>
                <Inputs className="caixaTexto " type="text" placeholder="Conte-me, oque precisa?"></Inputs>
            </Form>
        </GlobalContainer>
    )
}

export default Formulario