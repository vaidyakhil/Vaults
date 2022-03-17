import { ColorTokens } from '../component_schema';

const ColorTokenMap: { [key in ColorTokens]: string } = {
    [ColorTokens.PURPLE_100]: '#6200EE',
    [ColorTokens.BLACK_100]: '#000000',
    [ColorTokens.WHITE_100]: '#ffffff',
    [ColorTokens.BLUE_DARK]: '#3457D5',
    [ColorTokens.GREY_100]: '#BEBEBE',
    [ColorTokens.BLUE_AQUA]: '#A4DDED'
}

export default ColorTokenMap;