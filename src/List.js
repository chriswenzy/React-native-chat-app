import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity
} from 'react-native';

export default class Groups extends React.Component {
  render() {
    return (
      <TouchableOpacity onPress={this.props.onPress} style={styles.container}>
       
       <View style={styles.GroupList}>
      
        <View style={styles.GroupIcon}>
          <Text style={styles.GroupText}

          onPress={() => {
            this.props.navigation.navigate('Message');
          }}
          >G</Text>
        </View>
        <View style={styles.GroupTxt}>
          <Text style={styles.GroupName}
          onPress={() => {
            this.props.navigation.navigate('Message');
          }}
          >Group 05</Text>
          <Text style={styles.member}
          onPress={() => {
            this.props.navigation.navigate('Message');
          }}
          >50 Members</Text>
        </View>

       </View>

       <View style={styles.GroupList}>

        <View style={styles.GroupIcon}>
          <Text style={styles.GroupText}>G</Text>
        </View>

        <View style={styles.GroupTxt}>
          <Text style={styles.GroupName}>Group 06</Text>
          <Text style={styles.member}>60 Members</Text>
        </View>
        
       </View>

       <View style={styles.GroupList}>

        <View style={styles.GroupIcon}>
          <Text style={styles.GroupText}>G</Text>
        </View>

        <View style={styles.GroupTxt}>
          <Text style={styles.GroupName}>Group 07</Text>
          <Text style={styles.member}>20 Members</Text>
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
    // alignItems: 'center',
    backgroundColor: 'white',
  },

  GroupTxt:{
    flexDirection: 'column',
  },

  GroupList: {
    height: 60,
    backgroundColor: '#E5EBEC',
    alignItems: "stretch",
    marginTop: 20,
    flexDirection: 'row'
  },

  GroupIcon: {
    borderRadius: 50,
    backgroundColor: 'rgb(255, 255, 255)',
    height: 50,
    width: 50,
    marginTop: 5,
    justifyContent: 'center',
  },

  GroupText: {
    marginLeft: 15,
    fontSize: 25,
  },

  GroupName: {
    fontSize: 18,
    marginLeft: 10,
    marginTop: 10,
  },

  member: {
    marginLeft: 10,
    marginTop: 5,
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
