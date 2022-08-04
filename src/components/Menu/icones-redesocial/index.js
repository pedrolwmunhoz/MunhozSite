import linkedin from "./linkedin.png"
import gitHub from "./gitHub.png"
import styled from "styled-components"
import { Link } from "react-router-dom"

const GlobalContainer = styled.div`
        margin-top: 10vh;

        #git{
            width: 15%;
        }
        div{
            width: 5%;
            display: inline-block;
        }
    `

    const Imagem = styled.img`
        width: 18%;
        filter: invert(100%);
        cursor: pointer;
        :hover{
            filter: invert(100%)
            contrast(30%);
        }
    `

function IconesRedeSocial () {


    return(
        <GlobalContainer>
            <a href="https://www.linkedin.com/in/pedro-munhoz-675847222">
            <Imagem src={linkedin}/>
            </a>
            <div></div>
            <a href="https://github.com/pedrolwmunhoz">
            <Imagem id="git" src={gitHub}/>
            </a>
        </GlobalContainer>
    )
}

export default IconesRedeSocial