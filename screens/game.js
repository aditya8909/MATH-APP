import * as React from 'react'
import {View,Text,TouchableOpacity,Image} from 'react-native'

export default class GameScreen extends React.Component{
  render(){
    return(
      <View>
      <Text style={{ color:"blue",textAlign:'center',fontWeight:"bold",fontSize:25,paddingTop:20,}}>Addition Ninja</Text>
      <Text style={{ color:"blue",textAlign:'center',fontWeight:"bold",fontSize:15,paddingTop:20,}}>https://aditya8909.github.io/addition-ninja-math-app/</Text>
      <Image source={require("../assets/play.svg")}></Image>
 <TouchableOpacity onPress={()=>this.props.navigation.navigate("HomeScreen")} style={{borderColor:"black",border:1,}}><Text>Back</Text></TouchableOpacity>
        </View>
    )
  }
}