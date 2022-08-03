import styled from 'styled-components'
import Menu from '../../components/Menu'
import { Outlet } from 'react-router-dom'

const ContainerLayout = styled.div`
    display: inline-block;
    height: 100vh;
    width: 100vw;
`

const ContainerContent = styled.div`
    flex-grow: 1;
    margin-left: 10vw;
`

function BaseLayout({ children }: { children?: JSX.Element }) {


    return (
        children ? (
            <ContainerLayout>
                <Menu />
                <ContainerContent >
                    {children}
                </ContainerContent>
            </ContainerLayout>
    ):  (
        <BaseLayout>
            <Outlet/>
        </BaseLayout>)
    )
}

export default BaseLayout

