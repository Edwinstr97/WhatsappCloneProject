import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';



//Screens

import SplashScreen from './SplashScreen';
import IndividualChatScreen from './IndividualChatScreen';
import MainChatScreen from './MainChatScreen'





const RootStack = createStackNavigator();

const RootStackScreen = ({navigation}) => (
    <RootStack.Navigator headerMode='none'>
        <RootStack.Screen name="SplashScreen" component={SplashScreen}/>
        <RootStack.Screen name="IndividualChatScreen" component={IndividualChatScreen}/>
        <RootStack.Screen name="MainChatScreen" component={MainChatScreen}/>
       
    </RootStack.Navigator>
);

export default RootStackScreen;