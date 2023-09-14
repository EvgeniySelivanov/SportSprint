import React from 'react';
import { TouchableOpacity,Text } from 'react-native';
import { Entypo } from '@expo/vector-icons';
const SoundBtn = ({ onPress, music ,text}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.button}>
      {music ? (
        <Entypo name="sound" size={24} color="green" />
      ) : (
        <Entypo name="sound-mute" size={24} color="red" />
      )}
      <Text style={styles.buttonText}>{text}</Text>
    </TouchableOpacity>
  );
};
const styles = {
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#e8d665',
    padding: 3,
    borderRadius: 5,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 18,
    marginLeft: 10,
  },
};
export default SoundBtn;
