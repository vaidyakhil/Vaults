import React from 'react';
import { VaultsComponentTypes } from '../component_schema';
import { Button } from './button';
import { InputTextField } from './input_text_field';
import { TextCard } from './text_card';

const PropsComponentMap: { [key in VaultsComponentTypes]: React.FunctionComponent<any>} = {
    [VaultsComponentTypes.TEXT_CARD]: TextCard,
    [VaultsComponentTypes.BUTTON]: Button,
    [VaultsComponentTypes.INPUT_TEXT_FIELD]: InputTextField,
}

export default PropsComponentMap;