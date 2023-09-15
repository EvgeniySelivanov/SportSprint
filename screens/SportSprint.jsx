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
import Arrow from '../components/Arrow';
const bgImage = require('../assets/bgGame.png');
const Space = styled(ImageBackground)`
  flex: 1;
  margin-top: 25px;
  margin-bottom: 25px;
  overflow: hidden;
`;
const ScoreText = styled.Text`
  position: absolute;
  top: 43px;
  left: 110px;
  color: #ffffff;
  font-size: 50px;
  font-weight: 700;
`;
const SportSprint = () => {
  let arrowPosition={
    x:CONSTANTS.ARROW_POSITION.x,
    y:CONSTANTS.ARROW_POSITION.y
  };
  const arrowValueChange = (xPosition) => {
    arrowPosition.x=xPosition;
  };
  let speed=6000;
  const route = useRoute();
  let quantity = route.params.quantity;
  const [isGameRun, setIsGameRun] = useState(false);
  const [sound, setSound] = useState();
  const [music, setMusic] = useState(false);
  const [coin, setCoin] = useState(0);
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
          positionY={-396}
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
    <ScoreText>Coins:{isGameRun ? coin : 0}$</ScoreText>
    <StartMessage isGameRun={isGameRun} />
    <Arrow arrowValueChange={arrowValueChange}/>
     </Space>
    </TouchableWithoutFeedback>
  );
}


export default SportSprint;
