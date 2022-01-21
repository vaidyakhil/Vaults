import React from 'react'
import { Components } from '../component_schema'
import { Button, TextCard } from '.'

const PropsComponentMap: { [key in Components]: React.FunctionComponent<any>} = {
    [Components.TEXT_CARD]: TextCard,
    [Components.BUTTON]: Button
}

export default PropsComponentMap;