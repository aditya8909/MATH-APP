import * as React from 'react'
import {View,Text,TouchableOpacity,Image} from 'react-native'
export default class StudyScreen extends React.Component{
  render(){
    return(
      <View >
    <TouchableOpacity onPress={()=>this.props.navigation.navigate("HomeScreen")} style={{borderColor:"black",border:1,}}><Text>Back</Text></TouchableOpacity>
      <Text style={{ color:"blue",fontWeight:"bold",fontSize:20,paddingTop:20,paddingLeft:10}}>1. Roman number zero
</Text>
      <Text style={{ color:"blue",fontWeight:"bold",fontSize:10,paddingTop:20,paddingLeft:10}}>There is no Roman numeral for zero! Check the roman numerals of 10, 20, 30, 100, 500… you do not have a xero in roman numerals!
</Text>



      <Text style={{ textAlign:"right", color:"blue",fontWeight:"bold",fontSize:20,paddingTop:20,paddingRight:10}}> 2. The first ‘B’ is in 1 Billion

</Text>
      <Text style={{ color:"blue",fontWeight:"bold",fontSize:10,paddingTop:20,paddingLeft:10}}> Yes, that’s right. When spelling down the numbers, it is not until we spell 1,000,000,000. 1 billion is the first time that the alphabet letter B appears.


</Text>



      <Text style={{ color:"blue",fontWeight:"bold",fontSize:20,paddingTop:20,paddingLeft:10}}>3. The first ‘A’ appears in 1000

</Text>
      <Text style={{ color:"blue",fontWeight:"bold",fontSize:10,paddingTop:20,paddingLeft:10}}> The alphabet A does not appear anywhere from 0 until we reach the spelling of 1000. A much smaller surprise than the fact 1, right?


</Text>



      <Text style={{ textAlign:"right", color:"blue",fontWeight:"bold",fontSize:20,paddingTop:20,paddingRight:10}}>4. Fun Number FOUR

</Text>
      <Text style={{ color:"blue",fontWeight:"bold",fontSize:10,paddingTop:20,paddingLeft:10}}> FOUR is the only number which has the same number of alphabets in its spelling as the value of the digit i.e. F-O-U-R. 
</Text>



      <Text style={{ color:"blue",fontWeight:"bold",fontSize:20,paddingTop:20,paddingLeft:10}}>5. FORTY - The Alphabetical Number
</Text>
      <Text style={{ color:"blue",fontWeight:"bold",fontSize:10,paddingTop:20,paddingLeft:10}}> If you check the spelling of 40 with attention, you would notice that the letters are arranged alphabetically. It is also the only number that has this feature!
</Text>







      </View>
    )
  }
}