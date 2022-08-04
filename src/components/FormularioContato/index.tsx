import styled from "styled-components"

const GlobalContainer = styled.div`
    display: inline-block;
    margin-left: 2vw !important;

`
const Form = styled.form`

    .caixaTexto {
        padding-bottom: 25vh;

    }
    .inputStyled {
        background-color: #2b2b2b;
        font-size: 16px;
        border: 0;
        color: #8d8d8d;
        padding: 20px;
    }


`
const Inputs = styled.input`
    width: 630px;
    margin-bottom: 10px;
    padding: 6px;
    display: block;
    background-color: #2b2b2b;
    font-size: 16px;
    border: 0;
    color: #8d8d8d;
    padding: 20px;

`

function Formulario(){
    return(
        <GlobalContainer>
            <Form>
                <Inputs className="inputStyled" type="text" placeholder="Nome"></Inputs>
                <Inputs className="inputStyled" type="email" placeholder="Email"></Inputs>
                <Inputs className="caixaTexto " type="text" placeholder="Conte-me, oque precisa?"></Inputs>
            </Form>
        </GlobalContainer>
    )
}

export default Formulario