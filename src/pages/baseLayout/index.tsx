import styled from 'styled-components'
import Menu from '../../components/Menu'
import { Outlet } from 'react-router-dom'

const ContainerLayout = styled.div`
    display: flex;
    height: 100vh;
`

const ContainerContent = styled.div`
    flex-grow: 1;
    margin-left: 15.5vh;
    height: 100vh;
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

