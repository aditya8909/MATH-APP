import * as React from 'react'
import {View,Text,TouchableOpacity,Image,TextInput} from 'react-native'
export default class ThankY extends React.Component{
  render(){
    return(
      <View>
      <Text style={{ color:"blue",textAlign:'center',fontWeight:"bold",fontSize:25,paddingTop:20,}}>Thank You for your feedback</Text>
      <TouchableOpacity
            onPress={this.props.navigation.navigate("HomeScreen")}
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

       style={{
         color:"white",textAlign:'center',fontWeight:"bold",fontSize:25,
      }}>Back</Text>
      </TouchableOpacity>
       <TouchableOpacity onPress={()=>this.props.navigation.navigate("HomeScreen")} style={{borderColor:"black",border:1,}}><Text>Back</Text></TouchableOpacity>
      </View>
      
    )
  }
}