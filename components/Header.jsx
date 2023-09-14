import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import MenuBtn from './MenuBtn';
import SoundBtn from './SoundBtn';
const Header = ({ gameOver, setMusic, music,stopMusic }) => {
  const navigation = useNavigation();
  const goToMenu = () => {
    gameOver();
    navigation.navigate('Menu');
  };
  const onMusic = () => {
    if(music){
      stopMusic();
      setMusic(false);
    }
   if(!music){
    setMusic(true);}
  };
  return (
    <View style={styles.bg}>
      <MenuBtn onPress={goToMenu} text={"MENU"}/>
      <SoundBtn onPress={onMusic} music={music} text={"MUSIC"}/>
    </View>
  );
};

const styles = StyleSheet.create({
  bg: {
    flexDirection:'row',
    justifyContent: 'space-between',
    padding: 5,
    height: 40,
    width: '100%',
    backgroundColor: '#3f0a99',
    textAlign: 'center',
    zIndex: 50,
  },
  text: {
    textAlign: 'center',
    fontSize: 20,
    color: 'white',
    zIndex: 50,
  },
});

export default Header;
