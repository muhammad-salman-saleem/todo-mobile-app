import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import NavigatorRoute from './src/routes/NavigatorRoute';
import {StatusBar} from 'react-native';

const App = () => {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor="transparent" translucent={true} barStyle="light-content"/>
      <NavigatorRoute />
    </NavigationContainer>
  );
};

export default App;
