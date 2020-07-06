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
  Image,
  TouchableOpacity,
  TextInput,ImageBackground,
  FlatList,
  KeyboardAvoidingView,Platform

} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'
// import Icon from 'react-native-vector-icons/MaterialIcons';

export default class IndividualChatScreen extends React.Component{
  constructor(props) {
    super(props)
    StatusBar.setBackgroundColor('#075e54')

    this.state = {
      message: 'Hey wassupp?',
      msg: '',
     
    };
   
  }

  renderHeader(){
    const item = this.props.route.params.data;
    const items = this.props.route.params.picture;
    
    return(
  <View>

<View style={styles.top}>
    <View   style={styles.row}>
  
      <TouchableOpacity>
        <Icon
          name="arrow-back"
          color="#fff"
          size={30}
          style={{ padding: 5 }}
        />
      </TouchableOpacity>

    <Image source={{uri:items}} style={styles.pic} />
    <Text style={styles.logo}>{item}</Text>
    </View>
    
   
    <View style={styles.icons}>
      <TouchableOpacity>
        <Icon
          name="videocam"
          color="#fff"
          size={23}
          style={{ padding: 5 }}
        />
      </TouchableOpacity>
      <TouchableOpacity>
        <Icon
          name="phone"
          color="#fff"
          size={23}
          style={{ padding: 5 }}
        />
      </TouchableOpacity>
      <TouchableOpacity>
        <Icon
          name="more-vert"
          color="#fff"
          size={23}
          style={{ padding: 5 }}
        />
      </TouchableOpacity>
    </View>
  </View>
  </View>
    )
  
    }
 

  renderBottom(){
    return(


      <View style={{backgroundColor:'transparent',flexDirection:'row',height:50}} >
               <TouchableOpacity>
               <View  style={{backgroundColor:'white',flexDirection:'row',borderRadius:60 ,marginLeft:10,width:"110%"}} >
               <Icon name="insert-emoticon" color="grey" size={23} style={{ padding: 5 ,marginTop:10}} />
                 <TextInput
                 value = {this.state.message}
                 onChangeText={value => {
                  this.setState({ message: value })
                }}
                 style={{backgroundColor:'white',flexDirection:'row',borderRadius:60,width:150}
                }

                 ></TextInput>

             
              <Icon name="attach-file" color="grey" size={23} style={{ padding: 5 ,marginTop:10}} />
              <Icon name="camera-alt" color="grey" size={23} style={{ padding: 5 ,marginTop:10}} />
            </View>
      </TouchableOpacity>
   
    

    
      <View  style={{backgroundColor:'#075e54',borderRadius:30,height:50,width:50,justifyContent:'center',alignItems:'center',marginStart:40,alignSelf:'flex-end'}} >
      <TouchableOpacity>
    <Icon name="send" color="#fff" size={23} style={{ padding: 5 }}
      onPress={()=>this.send()} />
      
  
      </TouchableOpacity>
      </View>
      
      </View>
 
     
    )
  }
  send() {
   
     
      this.setState({
        dataSource:this.state.message,
        msg: '',
      });
      setTimeout(() => {
        this.reply();
      }, 2000);
    
  }
  reply(){
    alert('Sent')
  }

 
  render(){
    
  

  const renderChatList =((item)=>{
    return(
      <TouchableOpacity >
      <View style={styles.row} >
   
        <View style={{backgroundColor:'green'}}>
          <View>
    <Text >{this.state.message}</Text>
    <Text>vbvc</Text>
          </View>
          <View >
            <Icon
             size={15} color="#b3b3b3"
              style={{ marginLeft: 15, marginRight: 5 }}
            />
            <Text >dgfgfdz</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
    )

  })



   
    return(
      <ImageBackground
       style={{flex:1 ,width:null,
        height:null}}
       source={{uri:"https://i.pinimg.com/originals/ab/ab/60/abab60f06ab52fa7846593e6ae0c9a0b.png"}}
      
      >
        
       {/* <View><Text>{this.state.message}</Text></View> */}
        
        <View>
        {this.renderHeader()}
        </View>
        <View>
        <FlatList
        // style={{padding:10,height:10}}
         data={this.state.dataSource}
         keyExtractor={(x,i)=>i}
         renderItem={
           ({item})=>{
             return renderChatList(item) }
   
         }
        >
         
        </FlatList>

     </View>
      <View style={{bottom:0, position:'absolute'}}>
       {this.renderBottom()}
        </View>
      
        </ImageBackground>     
 
    )
  }
}

const styles = StyleSheet.create({
  roundView :{
    backgroundColor:'white',
    width:"100%",

  },
  textInput:{
		alignSelf:'flex-end',
		backgroundColor:'white',
    width:"100%",
    bottom:0,
    marginBottom:10
	},

  text: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  container: {
    flex: 1,
  },
 
  backgroundImage:{
    flex: 1,
    resizeMode: 'cover', // or 'stretch',
 

  },
    row: {
      flexDirection: 'row',
      alignItems: 'center',
      borderColor: '#f7f7f7',
      borderBottomWidth: 1,
      padding: 10,
      backgroundColor: 'yellow',
    },
    pic: {
      borderRadius: 30,
      width: 60,
      height: 60,
    }
    , top: {
      flexDirection: 'row',
      backgroundColor: '#075e54',
      borderColor: '#fff',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingHorizontal: 5,
      paddingVertical: 10,
    },
    logo: {
      fontSize: 18,
      color: '#fff',
      margin: 10,
      fontWeight: '500',
    },
    icons: {
      flexDirection: 'row',
    },
    pic: {
      borderRadius: 30,
      width: 50,
      height: 50,
    },
    row: { 
      flexDirection: 'row',
      alignItems: 'center',
  
      padding: 10,
  
    },
  
});


