import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  AsyncStorage,
  TouchableOpacity,
  Image,
  Button,
} from 'react-native';

export default class Message extends React.Component {
  render() {
    return (
      <TouchableOpacity onPress={this.props.onPress} style={styles.container}>

        <View>

          <View>
          <View style={styles.btnContainer}>
              <Text
                style={styles.btnText}
                onPress={() => {
                  this.props.navigation.navigate('NewGroup');
                }}>
                Login
              </Text>
            </View>
          </View>

          <View style={{
            flex: 1,
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'flex-start',
          }}>
            <View style={{width: "80%", height: "auto", backgroundColor: '#F5BA45', marginBottom: '15px',}}> 
            <Text
            style={styles.input}>
              dsfhjdshjgfghsdgfhjdsdsfhjdshjgfghsdgfhjdsdsfhjdshjgfghsdgfhjdsdsfhjdshjgfghsdgfhjdsdsfhjdshjgfghsdgfhjdsdsfhjdshjgfghsdgfhjdsdsfhjdshjgfghsdgfhjdsdsfhjdshjgfghsdgfhjdsdsfhjdshjgfghsdgfhjds 
            </Text>
            </View>
          
          </View>

          <View style={{
            flex: 1,
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'flex-end',
          }}>
            <View style={{width: "80%", height: "auto", backgroundColor: '#F5BA45', marginBottom: '10px'}}> 
            <Text
            style={styles.input}>
              dsfhjdshjgfghsdgfhjdsdsfhjdshjgfghsdgfhjdsdsfhjdshjgfghsdgfhjdsdsfhjdshjgfghsdgfhjdsdsfhjdshjgfghsdgfhjdsdsfhjdshjgfghsdgfhjdsdsfhjdshjgfghsdgfhjdsdsfhjdshjgfghsdgfhjdsdsfhjdshjgfghsdgfhjds 
            </Text>
            </View>

            <View style={{width: "80%", height: "auto", backgroundColor: '#F5BA45', marginBottom: '15px',}}> 
            <Text
            style={styles.input}>
              dsfhjdshjgfghsdgfhjdsdsfhjdshjgfghsdgfhjdsdsfhjdshjgfghsdgfhjdsdsfhjdshjgfghsdgfhjdsdsfhjdshjgfghsdgfhjdsdsfhjdshjgfghsdgfhjdsdsfhjdshjgfghsdgfhjdsdsfhjdshjgfghsdgfhjdsdsfhjdshjgfghsdgfhjds 
            </Text>
            </View>
           
          </View>
    
          <View style={styles.MessageContainer}>
              <View style={styles.Message}>
              <TextInput
              style={{width: "300px",}}
                  placeholder="Please enter message here"
                  autoCapitalize="characters"
                  autoCorrect={false}
                  placeholderTextColor="#B3B4B9"
                  onChangeText={(val) => this.onChangeText('mesg', val)}
                />
                  <Button 
                  title="Send"
                  style={styles.BtnSend}></Button>
              </View>
          </View>
          
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'flex-end',
  },

  input: {
    width: "100%",
    fontSize: 14,
    fontWeight: '500',
    height: "auto",
    backgroundColor: '#F7F7F7',
    margin: 2,
    color: 'black',
    padding: 5,
    borderRadius: 5,
  },

  MessageContainer: {
  //  alignItems: 'stretch',
   backgroundColor: '#F7F7F7',
   flexDirection: 'row',
  },

  Message:{
    // fontSize: 14,
    // fontWeight: '500',
    height: 50,
    color: 'black',
    padding: 10,
    borderRadius: 5,
    flexDirection: 'row',
  },

});
