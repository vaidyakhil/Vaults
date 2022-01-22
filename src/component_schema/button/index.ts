import { ActionData, ButtonTypeToken } from '../types';

export type ButtonProps = {
    buttonText: string;
    tapAction: ActionData;
    buttonTypeToken: ButtonTypeToken;
}