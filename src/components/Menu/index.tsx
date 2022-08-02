import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Icone from '../../images/IconeM/icone'
import IconesRedeSocial from './icones-redesocial'

const GlobalContainer = styled.div`
        position: fixed;
        text-align: center;
        display: inline-block;
        width: 15.5vh;
        menu{
            background-color: #181818;
            height: 100vh;
            div {
                .containerIcone{
                    width: 65%;
                    margin: auto;
                    padding-top: 10%;

                }
                h1{
                    font-family: 'Roboto', sans-serif;;
                    color: #fff;
                    font-weight: bold;
                    font-size: 3vh;
                }
            }
            p{
                color:#a5a5a5;
                font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
                font-size: 11px;
                margin-top: 2vh;
                margin-bottom: 5vh;
                padding-bottom: 3vh;
                border-bottom: 1px solid #282828;
            }
            .divisao{
                padding-top: 100%;
                background-color: #181818;
                nav{
                    border-top: 1px solid #282828;
                    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
                    font-size: 16px;
                    padding: 20px;
                    .link{
                        color: #909096;;
                    }
                }
            }
            .containerIconeRedeSocial{
                background-color: #181818;
                color: white;
                font-size: 20px;
                border-top: 1px solid #282828;
            }
        }
    `

function Menu(){
    return(
        <GlobalContainer>
            <menu>
                <div>
                    <div className="containerIcone">
                    <Link to="/"><Icone/></Link>
                    </div>
                    <Link to="/"><h1>Munhoz</h1></Link>
                </div>
                <p>Web Developer</p>
                <div className="divisao">
                    <nav><Link className="link" to="/sobre"><span>Sobre</span></Link></nav>
                    <nav><Link className="link" to="/portfolio"><span>Portfolio</span></Link></nav>
                    <nav><Link className="link" to="/skills"><span>Minhas Skills</span></Link></nav>
                    <nav><Link className="link" to="/contato"><span>Contato</span></Link></nav>
                </div>
                <div className="containerIconeRedeSocial">
                    <IconesRedeSocial/>
                </div>
            </menu>
        </GlobalContainer>
    )
}

export default Menu