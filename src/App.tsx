import 'react-native-gesture-handler';
import React from 'react';
import { View, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import Routes from './routes';

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <StatusBar barStyle="light-content" backgroundColor="#312e38" />
      <View
        style={{
          flex: 1,
          backgroundColor: '#312e38',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Routes />
      </View>
    </NavigationContainer>
  );
};

export default App;
