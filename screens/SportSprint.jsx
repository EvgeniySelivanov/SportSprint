import React, { useState, useEffect, useRef } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import {
  Animated,
  View,
  Text,
  TouchableWithoutFeedback,
  ImageBackground,
  Easing,
} from 'react-native';
import { CONSTANTS } from '../constants';
import { Audio } from 'expo-av';
import styled from 'styled-components/native';
import StartMessage from '../components/StartMessage';
import Header from '../components/Header';
import Decoration from '../components/Decoration';
const bgImage = require('../assets/bgGame.png');
const Space = styled(ImageBackground)`
  flex: 1;
  margin-top: 25px;
  margin-bottom: 25px;
  overflow: hidden;
`;
const SportSprint = () => {
  let speed=6000;
  const route = useRoute();
  let quantity = route.params.quantity;
  const [isGameRun, setIsGameRun] = useState(false);
  const [sound, setSound] = useState();
  const [music, setMusic] = useState(false);

  useEffect(() => {
    if (isGameRun && music) {
      playSound();
    }
  }, [music]);
  async function playSound() {
    const { sound } = await Audio.Sound.createAsync(
      require('../assets/music.mp3')
    );
    setSound(sound);
    await sound.playAsync(); // Проигрывание аудио
  }
  const stopMusic = async () => {
    await sound.stopAsync();
    setMusic(false);
  };


  const gameOver = () => {
    setIsGameRun(false);
    console.log('game stop');
    
  };
  const startGame = () => {
    setIsGameRun(true);
    console.log('game start');
  };


  return (
    <TouchableWithoutFeedback onPress={startGame}>
      <Space source={bgImage}>
        <Header
          gameOver={gameOver}
          setMusic={setMusic}
          music={music}
          stopMusic={stopMusic}
        />
    {isGameRun && (
      <View>
        <Decoration
          speed={speed}
          imageName="image8"
          positionY={-400}
          positionX={0}
        />
        <Decoration
          speed={speed}
          imageName="image8"
          positionY={400}
          positionX={0}
        />
      </View>
    )}
     </Space>
    </TouchableWithoutFeedback>
  );
}


export default SportSprint;
