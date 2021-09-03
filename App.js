import React, { useState } from 'react';
import Navigator from './routes/homeStack';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';

const getFonts = () => {
  return Font.loadAsync({
    'Ubuntu-Bold' : require('./assets/fonts/UbuntuMono-Bold.ttf'),
    'Ubuntu-Regular' : require('./assets/fonts/UbuntuMono-Regular.ttf')
  })
}

export default function App() {
 const [fontsLoaded, setFontsLoaded] = useState(false);
 if(fontsLoaded){
   return (
    <Navigator/>
  );
 } else{
   return(
    <AppLoading
    startAsync = {getFonts}
    onFinish ={() => setFontsLoaded(true)}
    onError={(err) => console.log(err)}
    />
   )
 }
  
}