import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  AsyncStorage,
  TouchableOpacity,
  Image,
} from 'react-native';

export default class Message extends React.Component {
  render() {
    return (
      <TouchableOpacity onPress={this.props.onPress} style={styles.container}>

        <View>

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
    
          <View>
              <TextInput
            style={styles.Message}
            placeholder="Please enter message here"
            autoCapitalize="characters"
            autoCorrect={false}
            placeholderTextColor="#B3B4B9"
            onChangeText={(val) => this.onChangeText('mesg', val)}
          />
            
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

  Message: {
    width: "100%",
    fontSize: 14,
    fontWeight: '500',
    backgroundColor: '#F7F7F7',
    marginTop: 20,
    color: 'black',
    padding: 10,
    borderRadius: 5,
  },

});
