import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
const MenuBtn = ({ onPress, text }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.button}>
      <MaterialCommunityIcons name="menu" size={24} color="blue" />
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
    color: 'blue',
    fontSize: 18,
    marginLeft: 10,
  },
};
export default MenuBtn;