import { Text, SafeAreaView, StyleSheet ,View,TouchableOpacity,Image} from 'react-native';
import StudyScreen from './screens/study.js'
import HomeScreen from './screens/home.js'
import GameScreen from './screens/game.js'
import FeedbackScreen from './screens/feedback.js'
import PracticeScreen from './screens/practice.js'
import QuizScreen from './screens/quiz.js'
import ThankY from './screens/ty.js'
// You can import supported modules from npm
import { Card } from 'react-native-paper';
import { createAppContainer, createSwitchNavigator} from 'react-navigation'; 

// or any files within the Snack
import AssetExample from './components/AssetExample';

export default function App() {
  return (
<View>
<AppContainer/>
</View>
   

  )
}
    var AppNavigator= createSwitchNavigator({
ThankY:ThankY,
      HomeScreen:HomeScreen,
      StudyScreen:StudyScreen,
      QuizScreen:QuizScreen,
           FeedbackScreen: FeedbackScreen,
      PracticeScreen:PracticeScreen,
      GameScreen:GameScreen,
    })
    const AppContainer=createAppContainer(AppNavigator)

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     backgroundColor: '#ecf0f1',
//     padding: 8,
//   },
//   paragraph: {
//     margin: 24,
//     fontSize: 18,
//     fontWeight: 'bold',
//     textAlign: 'center',
//   },
//   button:{
//     marginTop:5,
//     marginLeft:5,

//   },
//   button2:{
// marginTop:-70,
//     marginLeft:85,

//   },
//   button3:{
// marginTop:-70,
//     marginLeft:165,

//   },
//   button4:{
// marginTop:-70,
//     marginLeft:245,

//   },
//   buttonImage:{
//         width:70,
//     height:70,
//   },
//   buttons:{

//   },
//   text:{
//   fontWeight:"bold",
//   fontSize:20,
//   paddingLeft:7,
//   paddingBottom:5,

//   }
  
// });
