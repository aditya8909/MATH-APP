import * as React from 'react'
import {View,Text,TouchableOpacity,Image,} from 'react-native'
export default class PracticeScreen extends React.Component{
  render(){
    return(
      <View>
        <Text style={{ color:"blue",textAlign:'center',fontWeight:"bold",fontSize:25,paddingTop:20,}}>Pi(π)</Text>
      <Text style={{color:"blue",textAlign:'center'}}>The number π is a mathematical constant that is the ratio of a circle's circumference to its diameter, approximately equal to 3.14159. The number π appears in many formulae across mathematics and physics. It is an irrational number, meaning that it cannot be expressed exactly as a ratio of two integers, although fractions such as 
22/7
 are commonly used to approximate it. Consequently, its decimal representation never ends, nor enters a permanently repeating pattern.
 </Text><Text style={{color:"red",textAlign:'center'}}>Pi Day is an annual celebration of the mathematical constant π (pi). Pi Day is observed on March 14 (the 3rd month) since 3, 1, and 4 are the first three significant figures of π.</Text>
 <Image source={require("../assets/Cremepiday.png")}/>
  <TouchableOpacity onPress={()=>this.props.navigation.navigate("HomeScreen")} style={{borderColor:"black",border:1,}}><Text>Back</Text></TouchableOpacity>
      </View>
    )
  }
}