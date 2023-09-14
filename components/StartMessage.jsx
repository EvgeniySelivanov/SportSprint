import React from 'react';
import { View, Text, StyleSheet} from 'react-native';
const StartMessage = ({isGameRun}) => {
  return (
 
        <View>
          {isGameRun ? (
            <Text></Text>
          ) : (
            <Text style={styles.buttonGameOver}>
              Touch screen to start.
            </Text>
          )}
        </View>
     
  );
}
const styles = StyleSheet.create({ 
  buttonGameOver: {
    top:110,
    paddingTop: 10,
    textAlign: 'center',
    fontSize: 37,
    color: 'blue',
    backgroundColor:'white'
  },
});
export default StartMessage;
