export enum ColorTokens {
    PURPLE_100 = 'PURPLE_100',
    BLACK_100  = 'BLACK_100',
    WHITE_100  = 'WHITE_100',
    BLUE_DARK  = 'BLUE_DARK',
    BLUE_AQUA  =  'BLUE_AQUA',
    GREY_100   = 'GREY_100'
}

export enum VaultsComponentTypes {
    TEXT_CARD = 'TEXT_CARD',
    BUTTON = 'BUTTON',
    INPUT_TEXT_FIELD = 'INPUT_TEXT_FIELD',
    MOVE_BALL = 'MOVE_BALL',
    TAG = 'TAG',
    DOCUMENT_CARD = 'DOCUMENT_CARD'
}

export enum ButtonTypeToken {
    PRIMARY_SMALL = 'PRIMARY_SMALL',
    SECONDARY_SMALL = 'SECONDARY_SMALL',
    PRIMARY_BIG = 'PRIMARY_BIG',
    SECONDARY_BIG = 'SECONDARY_BIG',
}

export type ActionData = {
    type: string;
    data: any;
}

export enum KeyboardType {
    DEFAULT = 'default',
    NUMERIC = 'numeric',
    EMAIL = 'email-address',
    PHONE_PAD = 'phone-pad',
}

export enum KeyboardReturnKeyType {
    DEFAULT = 'default',
    NUMERIC = 'numeric',
    EMAIL = 'email-address',
    PHONE_PAD = 'phone-pad',
}
