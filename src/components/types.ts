import React from "react";
import { ActionData } from "../component_schema";

export type CommonWidgetProps = {
    handleAction: (actionData: ActionData) => void;
};

export type VaultsComponent<T> = React.FunctionComponent<T & CommonWidgetProps>;