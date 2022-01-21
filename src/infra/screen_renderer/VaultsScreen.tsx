import React from "react";
import { ScreenRouteData } from "..";
import { TextCard } from "../../components";

const VaultsScreen: React.FunctionComponent<{ route: { params: ScreenRouteData} }> = ({ route: { params}}) => {  
    
    console.log('\n--- ---- ---\n');
    console.log('props in VaultsScreen', JSON.stringify(params));
    console.log('\n--- ---- ---\n');

    return (
        <TextCard textValue={params.route}/>
    );
}

export default VaultsScreen;