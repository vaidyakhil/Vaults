import React from 'react';
import { ScreensContainer } from './infra';
import { ScreenRouteData } from './infra_schema';
import { AppProps } from './component_schema';
import { ROUTES } from './config/routes';

const getInitialScreenRouteData = (props: AppProps): ScreenRouteData => {
  const { isUserLoggedIn } = props;

  if (!isUserLoggedIn) {
    return {
      route: ROUTES.SIGN_UP_SCREEN,
      initData: {}
    }
  }

  return {
    route: ROUTES.LOGIN_SCREEN,
    initData: {}
  }
}; 

const App: React.FunctionComponent<AppProps> = (props) => {
  const screenProps = getInitialScreenRouteData(props);

  return (
    <ScreensContainer {...screenProps}/>
  )
}

export default App;