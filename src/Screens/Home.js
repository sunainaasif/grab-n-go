import React from 'react';
import {StyleSheet,Text,View} from 'react-native';

export default class Home extends React.Component{
    static navigationOptions = {
        title: 'Welcome',
      };
      render() {
        const {navigate} = this.props.navigation;
        return (
          <Button
            title="Go to Jane's profile"
            onPress={() => navigate('Profile', {name: 'Jane'})}
          />
        );
      }
    




    render (){
        return(
            <View> <Text>This is Home Screen</Text>
            </View>
        );
    }
}