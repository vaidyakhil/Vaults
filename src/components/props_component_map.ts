import React from 'react';
import { VaultsComponentTypes } from '../component_schema';
import { Button } from './button';
import { DocumentCard } from './document_card';
import { InputTextField } from './input_text_field';
import { MoveBall } from './move_ball';
import { Tag } from './tag';
import { TextCard } from './text_card';
import { ToastStack } from './toast_stack';

const PropsComponentMap: { [key in VaultsComponentTypes]: React.FunctionComponent<any>} = {
    [VaultsComponentTypes.TEXT_CARD]: TextCard,
    [VaultsComponentTypes.BUTTON]: Button,
    [VaultsComponentTypes.INPUT_TEXT_FIELD]: InputTextField,
    [VaultsComponentTypes.MOVE_BALL]: MoveBall,
    [VaultsComponentTypes.TAG]: Tag,
    [VaultsComponentTypes.DOCUMENT_CARD]: DocumentCard,
    [VaultsComponentTypes.TOAST_STACK]: ToastStack
}

export default PropsComponentMap;