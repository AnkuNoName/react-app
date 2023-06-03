import React from 'react';
import {Home} from './screens/Home'
import {Profile} from './screens/Profile'
import {FotoPost} from './screens/FotoPost'
import {View, StatusBar} from 'react-native';

export default function App() {

  return (
    <View>
      <Home/>
      <StatusBar theme="auto" />
    </View>
  );
}
