import { ColorTokens } from "../../component_schema";
import ColorTokenMap from "../color_map";

const primaryButtonStyles = {
    container: { backgroundColor: ColorTokenMap[ColorTokens.PURPLE_100] },
    text: {
        color: ColorTokenMap[ColorTokens.WHITE_100]
    }
};

const secondaryButtonStyles = {
    container: {
        backgroundColor: ColorTokenMap[ColorTokens.WHITE_100],
        borderStyle: 'solid',
        borderWidth: 1,
        borderColor: ColorTokenMap[ColorTokens.BLACK_100]
    },
    text: {
        color: ColorTokenMap[ColorTokens.BLACK_100]
    }
};

const smallButtonStyles = {
    container: {
        width: 'auto'
    },
    text: {

    }
}

const bigButtonStyles = {
    container: {
        width: '100%'
    },
    text: {

    }
}

export {
    primaryButtonStyles,
    secondaryButtonStyles,
    smallButtonStyles,
    bigButtonStyles,
}