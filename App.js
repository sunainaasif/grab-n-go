import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Login from  './src/Login/Login';
import LoginForm from './src/LoginForm/LoginForm';
import BarcodeScannerExample from './src/BarcodeScanner/BarcodeScanner';
import {createStackNavigator} from 'react-navigation';
import Home from './src/Screens/Home';

const App=createStackNavigator({
  Home:{ home:Home }
});
export default App;

// export default class App extends React.Component {
//   render() {
//     return (
//       <View style={styles.container}>
//        <Home/>
//          {/* <Login/>
//          <LoginForm/>  
//           <BarcodeScannerExample/> */}
          
//       <TouchableOpacity style={styles.buttonContainer}>
//             <Text style={styles.buttonText}>
//                 SIGN UP
//            </Text>
//       </TouchableOpacity>



//       </View> 

//     );
//   }
// }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //backgroundColor: 'rgba(123, 239, 178, 1)',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  buttonContainer:{
     backgroundColor:'#163d51',//'hsla(187, 100%, 40%,1)',
     paddingVertical:15,
    // color:'#FFFFFF',
     alignItems:'center',
     color:'white'
},
buttonText:{
  color:'white'

}
});
