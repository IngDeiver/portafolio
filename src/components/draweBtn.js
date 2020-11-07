import React from 'react'
import Icon from '../styled/components/icon'

export default ({toogleDrawer, openDrawer}) => {
    return (<Icon onClick={toogleDrawer} $lg={true}  className={["drawerBtn", openDrawer ? "fas fa-times":"fas fa-bars ml-3", "ml-4"]}/>)
}