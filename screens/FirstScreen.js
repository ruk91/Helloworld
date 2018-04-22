import React from 'react';
import {Text,View, Button, Image} from 'react-native';

export default class FirstScreen extends React.Component{
    static navigationOptions = {
        tabBarLabel : 'Screen1'
    }

    render(){
        return( 
        <View style={
            {
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center'
            }
            
        }>
        <Text style={{fontSize:30, color: 'green'}}> Screen1</Text>
        <Button
            
                onPress={() => this.props.navigation.navigate('DrawerOpen')}
                title = "Open Navigator"
                ></Button>

        </View>
        )}
}