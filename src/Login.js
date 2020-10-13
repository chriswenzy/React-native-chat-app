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

export default class Login extends React.Component {
  render() {
    return (
      <TouchableOpacity onPress={this.props.onPress} style={styles.container}>
       
        <View style={styles.textBox}>
          <Text style={styles.titleText}>Welcome</Text>
        </View>

        <View>
          <Text style={styles.label}>Name</Text>
          <TextInput
            style={styles.input}
            placeholder="Please enter name here"
            autoCapitalize="characters"
            autoCorrect={false}
            placeholderTextColor="#B3B4B9"
            onChangeText={(val) => this.onChangeText('name', val)}
          />

        

          <View style={styles.container}>
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
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },

  input: {
    width: 350,
    fontSize: 14,
    fontWeight: '500',
    height: 50,
    backgroundColor: '#F7F7F7',
    margin: 10,
    color: 'black',
    padding: 8,
    borderRadius: 5,
  },


  titleText: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'left',
    marginLeft: 30,
    color: '#F5BA45',
    marginTop: 30,
    marginBottom: 40,
  },

  label: {
    marginLeft: 10,
    color: '#FCD277',
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 100,
  },


  btnContainer: {
    backgroundColor: '#F5BA45',
    paddingVertical: 12,
    paddingHorizontal: 12,
    borderRadius: 5,
    textAlign: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 8,

    marginTop: 100,
  },

  btnText: {
    color: 'white',
    fontSize: 18,
    textAlign: 'center',
  },
});
