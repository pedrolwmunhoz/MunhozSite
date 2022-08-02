import Micone from "./icone.png"
import styled from "styled-components"

const Icon = styled.img`
    width: 100%;
    display: inline-block;
`

function Icone(){
    return(
        <Icon src={Micone}></Icon>
    )

}
export default Icone