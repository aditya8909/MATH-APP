import * as React from 'react'
import {View,Text,TouchableOpacity,Image,StyleSheet,SafeAreaView} from 'react-native'
export default class HomeScreen extends React.Component{
  render(){
    return(
   <View>

<View>
  <Text style={styles.text}>Welcome To Our App!!</Text>
<View style={styles.buttons}>
      <TouchableOpacity onPress={()=>this.props.navigation.navigate('StudyScreen')} style={styles.button}><Image source={require("../assets/Component15.svg")}style={styles.buttonImage} >
      </Image>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>this.props.navigation.navigate('GameScreen')}  style={styles.button2}><Image source={require("../assets/Component16.svg")}style={styles.buttonImage} >
      </Image>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>this.props.navigation.navigate('QuizScreen')} style={styles.button3}><Image source={require("../assets/Component17.svg")}style={styles.buttonImage} >
      </Image>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>this.props.navigation.navigate('PracticeScreen')} style={styles.button4}><Image source={require("../assets/Component18.svg")}style={styles.buttonImage} >
      </Image>
      </TouchableOpacity>

      </View>
</View>
<Text style={styles.text}>Coming Soon</Text>
<TouchableOpacity>
<Image source={require("../assets/images.svg")}/>
<Text style={styles.text}>Fractions</Text></TouchableOpacity>
<TouchableOpacity onPress={()=>this.props.navigation.navigate('FeedbackScreen')}>
<Image   source={require("../assets/Group1.svg")}></Image></TouchableOpacity>
       </View>
    )

  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  button:{
    marginTop:5,
    marginLeft:5,

  },
  button2:{
marginTop:-70,
    marginLeft:85,

  },
  button3:{
marginTop:-70,
    marginLeft:165,

  },
  button4:{
marginTop:-70,
    marginLeft:245,

  },
  buttonImage:{
        width:70,
    height:70,
  },
  buttons:{

  },
  text:{
  fontWeight:"bold",
  fontSize:20,
  paddingLeft:7,
  paddingBottom:5,

  }
  
});
