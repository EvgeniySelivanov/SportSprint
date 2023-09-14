import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { AntDesign } from '@expo/vector-icons'; 
const PlayBtn = ({ onPress, text }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.button}>
      <Text style={styles.buttonText}>{text}</Text>
      <AntDesign name="playcircleo" size={30} color="white" />
    </TouchableOpacity>
  );
};
const styles = {
  button: {
    justifyContent:'space-between',
    height:60,
    paddingLeft:12,
    paddingRight:12,
    margin:10,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#433281',
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 30,
    fontWeight:700,
  },
};
export default PlayBtn;