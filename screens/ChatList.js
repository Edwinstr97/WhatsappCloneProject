/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  ListView,
  TouchableOpacity,
  Image
  ,
  Alert
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { FlatList } from 'react-native-gesture-handler';
import {ListItem,List} from 'react-native-elements'

const fetch = require('node-fetch')



export default class ChatList extends React.Component{

  constructor(props) {
    super(props)
    StatusBar.setBackgroundColor('#075e54')
    this.state = {
      Contacts: [],
      Chats: [],
      Calls: [],
    };
  }
  componentDidMount(){
    // let myresyuedt = new Request("./data/data.json")
    fetch('https://my-json-server.typicode.com/Edwinstr97/jsondata/db')
    .then(response=> response.json())
 
    .then(data => this.setState({
      Contacts: data.Contacts,
      Chats: data.Chats,
      Calls: data.Calls,
    }));
  };



  

  render(){
    const { navigate } = this.props.navigation;

    const renderChatList =((item)=>{
      return(
        <TouchableOpacity

        onPress={() => navigate('IndividualChatScreen',{
          data: item.name,
          picture :item.image
        }
        )}
        
       >
        <View style={styles.row}>
          <Image source={{uri:item.image}} style={styles.pic} />
          <View>
            <View style={styles.nameContainer}>
      <Text style={styles.nameTxt}>{item.name}</Text>
      <Text style={styles.time}>{item.time}</Text>
            </View>
            <View style={styles.msgContainer}>
              <Icon
               size={15} color="#b3b3b3"
                style={{ marginLeft: 15, marginRight: 5 }}
              />
              <Text style={styles.msgTxt}>{item.message}</Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
      )

    })
    return(
      <View>
        
         <FlatList
         data={this.state.Chats}
         keyExtractor={(x,i)=>i}
         renderItem={
           ({item})=>{
             return renderChatList(item) }
   
         }
        >
          
           
         
        </FlatList>

      </View>
       
       
       
       
      
     
    )
  }
}



const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#f7f7f7',
    borderBottomWidth: 1,
    padding: 10,
    backgroundColor: '#fff',
  },
  pic: {
    borderRadius: 30,
    width: 60,
    height: 60,
  },
  nameContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 280,
  },
  nameTxt: {
    marginLeft: 15,
    fontWeight: '600',
    color: '#222',
    fontSize: 15,

  },
  time: {
    fontWeight: '200',
    color: '#777',
    fontSize: 13,
  },
  msgContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  msgTxt: {
    fontWeight: '400',
    color: '#666',
    fontSize: 12,
  },
});



