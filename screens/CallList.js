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
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { FlatList } from 'react-native-gesture-handler';



export default class CallList extends React.Component{

  constructor(props) {
    super(props)
    StatusBar.setBackgroundColor('#128C7E')
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


  //   const renderCallList =((item)=>{
  //     return(
  //       <TouchableOpacity>
  //       <View style = {styles.listItemContainer}>
  //   <View style= {styles.iconContainer}>
  //    <Image source={{uri:person.image}} style={styles.initStyle} resizeMode='contain' />
  //   </View>
  //   <View style = {styles.callerDetailsContainer}>
  //    <View style={styles.callerDetailsContainerWrap}>
  //     <View style={styles.nameContainer}>
  //       <Text>{person.first_name}</Text>
  //       <View style={styles.dateContainer}>
  //         <Icon name={person.missed ? "call-missed" : "call-received"} size={15} color={person.missed ? "#ed788b" : "#075e54"} />
  //         <Text style={{ fontWeight:'400', color:'#666', fontSize:12 }}>{person.date} {person.time}</Text>
  //       </View>
  //      </View>
  //    <View style={styles.callIconContainer}>
  //     <Icon name="phone" color='#075e54' size={23} style={{ padding:5 }} />
  //    </View>
  //   </View>
  //  </View>
  // </View>
  //     </TouchableOpacity>
  //     )

  //   })





    return(

      <View>
   
      <FlatList
      data = {this.state.Calls}
      keyExtractor={(y,j)=>j}
      renderItem={
        ({item})=>
        <View>
          <Text>{item.name}</Text>
        </View>
          

        
         // <View>
         //   <Text>{item.name}</Text>
           
         // </View>
            
         
         //  return renderCallList(item)
         //  console.log(item)
        
      }>

      </FlatList>

      </View>
    )
  }
}


const styles = StyleSheet.create({
   logoText: {
     color: "white",
     fontWeight: "bold",
     fontSize: 16,
     alignItems: "flex-start",
     marginLeft: 10
   },
   listItemContainer: {
     flex: 1,
     flexDirection: "row",
     alignItems: "center",
     padding: 10
   },
   iconContainer: {
     flex: 1,
     alignItems: "flex-start"
   },
   callerDetailsContainer: {
     flex: 4,
     justifyContent: "center",
     borderBottomColor: "rgba(92,94,94,0.5)",
     borderBottomWidth: 0.25
   },
   callerDetailsContainerWrap: {
     flex: 1,
     alignItems: "center",
     flexDirection: "row"
   },
   nameContainer: {
     alignItems: "flex-start",
     flex: 1
   },
   dateContainer: {
     flexDirection: "row",
     justifyContent: "space-between",
     alignItems: "center"
   },
   callIconContainer: {
     flex: 1,
     alignItems: "flex-end"
   },
   initStyle: {
     borderRadius: 30,
     width: 60,
     height: 60
   }
 });