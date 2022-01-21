import React from 'react';
import { VaultsComponentTypes } from '../component_schema';
import { Button } from './button';
import { TextCard } from './text_card';

const PropsComponentMap: { [key in VaultsComponentTypes]: React.FunctionComponent<any>} = {
    [VaultsComponentTypes.TEXT_CARD]: TextCard,
    [VaultsComponentTypes.BUTTON]: Button
}

export default PropsComponentMap;