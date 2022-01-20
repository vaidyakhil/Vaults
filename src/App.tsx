import React from 'react';
import { TextCard } from './components';
import { AppProps } from './component_schema';

const App: React.FunctionComponent<AppProps> = ({ isUserLoggedIn }) => {
  return (
    <TextCard textValue='Welcome to React Native Realm!!'/>
  );
}

export default App;