import * as React from 'react'
import {View,Text,TouchableOpacity,Image} from 'react-native'
export default class QuizScreen extends React.Component{
  render(){
    return(
      <View><Text style={{fontWeight:"bold",textAlign:'center',paddingTop:10,paddingBottom:20}}>
  learn about space by this link (Its made by us)</Text>
  <Text style={{fontWeight:"bold",textAlign:'center'}}>https://aditya8909.github.io/Space-Exploration-Hub/</Text>
  <Image  source={require("../assets/download.jpg")}style={{paddingleft:50}}></Image>
   <TouchableOpacity onPress={()=>this.props.navigation.navigate("HomeScreen")} style={{borderColor:"black",border:1,}}><Text>Back</Text></TouchableOpacity>
      </View>
    )
  }
}