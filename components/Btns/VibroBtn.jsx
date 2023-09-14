import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
const VibroBtn = ({ onPress, text, vibro }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.button}>
      <Text style={styles.buttonText}>{text}</Text>
      {vibro ? (
        <MaterialCommunityIcons name="toggle-switch" size={50} color="green" />
      ) : (
        <MaterialCommunityIcons
          name="toggle-switch-off"
          size={50}
          color="red"
        />
      )}
    </TouchableOpacity>
  );
};
const styles = {
  button: {
    justifyContent: 'space-between',
    height: 60,
    paddingLeft: 12,
    paddingRight: 12,
    margin: 10,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#433281',
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 30,
    fontWeight: 700,
  },
};
export default VibroBtn;
