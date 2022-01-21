import React from "react";

export type ActionData = {
    type: string;
    data: any;
}

export type CommonWidgetProps = {
    handleAction: (actionData: ActionData) => void;
}

export type VaultComponents<T> = React.FunctionComponent<T & CommonWidgetProps>