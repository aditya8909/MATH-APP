import * as React from 'react'
import {View,Text,TouchableOpacity,Image,TextInput} from 'react-native'
export default class FeedbackScreen extends React.Component{
  render(){
    return(
      <View>

      <Text style={{ color:"blue",textAlign:'center',fontWeight:"bold",fontSize:25,paddingTop:20,}}>Please write a feedback</Text><TextInput
      style={{
        color:"blue",
        borderColor:'blue',
        marginLeft:10,
        marginTop:10,
        paddingLeft:10,
        paddingBottom:100,
        marginRight:10,
        borderWidth:3,
        borderRadius:10,
      }}
      placeholder="Please write a feedback."
      />
      <TouchableOpacity
      // onPress={thankYou()}
      style={{
        backgroundColor:"blue",
        borderWidth:30,
        marginLeft:60,
        marginRight:60,
        marginTop:20,
        borderColor:"blue",
        borderRadius:10,
        

      }}
      >

      <Text
      onPress={()=>this.props.navigation.navigate('ThankY')}z
       style={{
         color:"white",textAlign:'center',fontWeight:"bold",fontSize:25,
      }}>Submit</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>this.props.navigation.navigate("HomeScreen")} style={{borderColor:"black",border:1,}}><Text>Back</Text></TouchableOpacity>
      </View>
    )
  }
}