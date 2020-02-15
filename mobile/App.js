import React from 'react';
import { StatusBar } from 'react-native'

import Routes from './src/pages/routes';

export default function App() {
  return (
    <>
    <StatusBar barStyle="light-content" backgroundColor="#7d40e7"/>
    <Routes />
    </>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#7169c1',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },

//   title: {
//     fontWeight: "bold",
//     fontSize: 32,
//     color: '#fff',
//   },
// });

//Instalação de dependências

//  yarn add react-navigation
//  expo install react-native-gesture-handler react-native-reanimated react-native-screens react-native-safe-area-context
// yarn add react-navigation-stack