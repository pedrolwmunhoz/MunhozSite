import linkedin from "./linkedin.png"
import gitHub from "./gitHub.png"
import styled from "styled-components"

const GlobalContainer = styled.div`
        height: 100vh;
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
            <Imagem src={linkedin}/>
            <div></div>
            <Imagem id="git" src={gitHub}/>
        </GlobalContainer>
    )
}

export default IconesRedeSocial