import { ActionData, KeyboardType } from "../types";

export type InputTextFieldProps = {
   textValue?: string;
   placeHolderValue?: string;
   onTextChangeAction: ActionData;
   keyboardType?: KeyboardType;
}