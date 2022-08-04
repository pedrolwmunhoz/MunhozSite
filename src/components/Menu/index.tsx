import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Icone from '../../images/IconeM/icone'
import IconesRedeSocial from './icones-redesocial'

const GlobalContainer = styled.div`
        @media only screen and (max-width : 768px){
        position: fixed;
        text-align: center;
        display: inline-block;
        width: 21vw;
        menu{
            background-color: #181818;
            height: 100vh;
            div {
                .containerIcone{
                    width: 65%;
                    margin: auto;
                    padding-top: 10%;

                }
                h1 {
                    font-family: 'Roboto', sans-serif;;
                    color: #fff;
                    font-weight: bold;
                    font-size: 0.9em;
                }

            }
            p {
                color:#a5a5a5;
                font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
                font-size: 0.7em;
                margin-top: 2vh;
                margin-bottom: 5vh;
                padding-bottom: 3vh;
                border-bottom: 1px solid #282828;
            }
            p:hover {
                color: #08fdd8;
            }
            .divisao {
                padding-top: 10vh;
                background-color: #181818;
                nav {
                    text-align: center;
                    border-top: 1px solid #282828;
                    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
                    font-size: 10px;
                    padding: 10px 4px;
                    .link {
                        color: #909096;;
                    }
                    .link:hover {
                        color: #08fdd8;
                    }
                }
            }
            .containerIconeRedeSocial {
                background-color: #181818;
                border-top: 1px solid #282828;
            }
        }
        }
        @media only screen and (min-width : 768px) and (max-width : 1024px) {
        position: fixed;
        text-align: center;
        display: inline-block;
        width: 10vw;
        menu {
            background-color: #181818;
            height: 100vh;
            div {
                .containerIcone {
                    width: 65%;
                    margin: auto;
                    padding-top: 10%;

                }
                h1 {
                    font-family: 'Roboto', sans-serif;;
                    color: #fff;
                    font-weight: bold;
                    font-size: 0.6em;
                }
            }
            p {
                color:#a5a5a5;
                font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
                font-size: 0.6em;
                margin-top: 2vh;
                margin-bottom: 5vh;
                padding-bottom: 3vh;
                border-bottom: 1px solid #282828;
            }
            p:hover {
                color: #08fdd8;
            }
            .divisao {
                padding-top: 10vh;
                background-color: #181818;
                nav {
                    border-top: 1px solid #282828;
                    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
                    font-size: 0.7em;
                    padding: 15px;
                    .link {
                        color: #909096;;
                    }
                    .link:hover {
                        color: #08fdd8;
                    }
                }
            }
            .containerIconeRedeSocial {
                background-color: #181818;
                border-top: 1px solid #282828;
            }
        }
        }
        @media only screen and (min-width : 1024px) and (max-width : 1440px) {
        position: fixed;
        text-align: center;
        display: inline-block;
        width: 10vw;
        height: 100vh;
        menu {
            background-color: #181818;
            height: 100vh;
            div {
                .containerIcone {
                    width: 65%;
                    margin: auto;
                    padding-top: 10%;

                }
                h1 {
                    font-family: 'Roboto', sans-serif;;
                    color: #fff;
                    font-weight: bold;
                    font-size: 1em;
                }
            }
            p {
                color:#a5a5a5;
                font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
                font-size: 0.7em;
                margin-top: 2vh;
                margin-bottom: 5vh;
                padding-bottom: 3vh;
                border-bottom: 1px solid #282828;
            }
            p:hover {
                color: #08fdd8;
            }
            .divisao {
                padding-top: 10vh;
                background-color: #181818;
                nav {
                    border-top: 1px solid #282828;
                    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
                    font-size: 0.9em;
                    padding: 20px;
                    .link {
                        color: #909096;;
                    }
                    .link:hover {
                        color: #08fdd8;
                    }
                }
            }
            .containerIconeRedeSocial {
                background-color: #181818;
                border-top: 1px solid #282828;
            }
        }
        }
        @media only screen and (min-width : 1400px) {
        position: fixed;
        text-align: center;
        display: inline-block;
        width: 10vw;
        height: 100vh;
        menu {
            background-color: #181818;
            height: 100vh;
            div {
                .containerIcone{
                    width: 65%;
                    margin: auto;
                    padding-top: 10%;

                }
                h1 {
                    font-family: 'Roboto', sans-serif;;
                    color: #fff;
                    font-weight: bold;
                    font-size: 1.5em;
                }
            }
            p {
                color:#a5a5a5;
                font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
                font-size: 1em;
                margin-top: 2vh;
                margin-bottom: 5vh;
                padding-bottom: 3vh;
                border-bottom: 1px solid #282828;
            }
            p:hover {
                color: #08fdd8;
                cursor: pointer;
            }
            .divisao {
                padding-top: 10vh;
                background-color: #181818;
                nav {
                    border-top: 1px solid #282828;
                    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
                    font-size: 1em;
                    padding: 20px;
                    .link {
                        color: #909096;;
                    }
                    .link:hover {
                        color: #08fdd8;
                    }
                }
            }
            .containerIconeRedeSocial {
                background-color: #181818;
                border-top: 1px solid #282828;
            }
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
                <Link to="/"><p>Web Developer</p></Link>
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