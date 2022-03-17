import React from 'react';
import { ScreensContainer } from './infra';
import { ScreenRouteData } from './infra_schema';
import { AppProps } from './component_schema';
import { ROUTES } from './routes';
import RoutesMap from './route_map';

const getInitialScreenRouteData = (props: AppProps): ScreenRouteData => {
  const { isUserLoggedIn } = props;

  if (!isUserLoggedIn) {
    return {
      route: ROUTES.SIGN_UP_SCREEN,
      initData: {}
    }
  }

  return {
    route: ROUTES.LISTING_SCREEN,
    initData: {}
  }
}; 

const App: React.FunctionComponent<AppProps> = (props) => {
  const screenProps = getInitialScreenRouteData(props);

  return (
    <ScreensContainer {...{ screeeData: screenProps, _routeMap: RoutesMap }}/>
  )
}

export default App;