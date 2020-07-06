/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
   StyleSheet,
  View,
  StatusBar,
  Dimensions,
} from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Icon from 'react-native-vector-icons/MaterialIcons'
import IndividualChatScreen from './IndividualChatScreen'
import SplashScreen from './SplashScreen';
import ChatList from './ChatList';
import CallList from './CallList';
import StatusList from './StatusList'

import {
  Colors,

} from 'react-native/Libraries/NewAppScreen';

const MaterialTobTabs = createMaterialTopTabNavigator()
const Stack = createStackNavigator()




export default class MainChatScreen extends React.Component {
  constructor(props) {
    super(props)
    StatusBar.setBackgroundColor('#075e54')
  }
  
  render() {

      const createTopTabs = () => {
      return (
        <MaterialTobTabs.Navigator
        style={
         {
           backgroundColor:'#075e54'
         }
        }
        tabBarOptions={{
          labelStyle:{
            textTransform:'none',
            color:'white'
          }
          ,
          indicatorStyle:{
            backgroundColor:'#075e54'

          },
          style:{
            backgroundColor:'#075e54',
            elevation:0,
            shadowOpacity:0
            
          }}}>

        <MaterialTobTabs.Screen name="Chat" component={ChatList}/>
        <MaterialTobTabs.Screen name="Status" component={StatusList}/>
         <MaterialTobTabs.Screen name="Call" component={CallList} />
        </MaterialTobTabs.Navigator>

        )}
   
        return (

          <NavigationContainer>
           <Stack.Navigator>
          <Stack.Screen name="ChatList" component={createTopTabs} options={{
            title: 'WhatsApp',
            headerTintColor:'white',
           
            headerStyle: {
              backgroundColor: '#075e54',
              elevation:0,
              
            
              shadowOpacity:0            },
             
            tabBarOptions: {
              labelStyle: {
                fontSize: 100,
              
              }
              ,
              
                
            },
            
            
            headerRight: () => (
              <View  style={{ marginLeft: 15, flexDirection: 'row' }}
              >
                  <Icon
          name="search"
          color="#fff"
          size={23}
          style={{ padding: 5 }}
        />
                 <Icon
          name="more-vert"
          color="#fff"
          size={23}
          style={{ padding: 5 }}
        />
              </View>
            )
  
          }}
          />
             <Stack.Screen name="IndividualChatScreen" component={IndividualChatScreen}
             options={{
              headerShown:false
             }}/>
      
        </Stack.Navigator>
      </NavigationContainer>




    )
  }
}




