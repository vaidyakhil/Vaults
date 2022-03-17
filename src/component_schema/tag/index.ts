import { ActionData, ColorTokens } from "../types";

export type TagProps = {
    id: string;
    text: string;
    tapAction?: ActionData;
    // todo: add functionality of color to come from parent
    // color: ColorTokens;
}