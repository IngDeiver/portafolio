import React from 'react'
import { Bars, Times } from '@styled-icons/fa-solid';
import styled  from 'styled-components'
import IconStyle from '../styled/components/icon'

const BarsIcon = styled(Bars)`
    ${IconStyle};
`
const TimesIcon = styled(Times)`
    ${IconStyle};
`
const BtnDrawerContainer = styled.div`
    width:30px;
    height:30px;
`


export default ({toogleDrawer, openDrawer}) => {
    return (
    <BtnDrawerContainer className="d-flex flex-column justy-content-center align-items-center" >
        {openDrawer ? <TimesIcon onClick={toogleDrawer} $lg={true}  className="drawerBtn ml-4"/>
        :<BarsIcon onClick={toogleDrawer} $lg={true}  className="drawerBtn ml-4"/>}
    </BtnDrawerContainer>)
}