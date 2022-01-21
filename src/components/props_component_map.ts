import React from 'react'
import { Components } from '../component_schema'
import { TextCard } from '.'

const PropsComponentMap: { [key in Components]: React.FunctionComponent<any>} = {
    [Components.TEXT_CARD]: TextCard
}

export default PropsComponentMap;