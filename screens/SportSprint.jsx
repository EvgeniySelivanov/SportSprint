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
import Coin from '../components/Coin';
import Indian from '../components/Indian';
import IndianWomen from '../components/IndianWomen';
import Shaman from '../components/Shaman';

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
  let arrowPosition = {
    x: CONSTANTS.ARROW_POSITION.x,
    y: CONSTANTS.ARROW_POSITION.y,
  };
  const arrowValueChange = (xPosition) => {
    arrowPosition.x = xPosition;
  };

  const route = useRoute();
  let quantity = route.params.quantity;
  const [speed,setSpeed]=useState(14000);
  const [isGameRun, setIsGameRun] = useState(false);
  const [sound, setSound] = useState();
  const [music, setMusic] = useState(false);
  const [coin, setCoin] = useState({ quant: 0, visibility: true });

  const coinPosition = useRef(
    new Animated.ValueXY(CONSTANTS.COIN_POSITION)
  ).current;
  const indianPosition = useRef(
    new Animated.ValueXY(CONSTANTS.INDIAN_POSITION)
  ).current;
  const indianWomenPosition = useRef(
    new Animated.ValueXY(CONSTANTS.INDIAN_WOMEN_POSITION)
  ).current;
  const shamanPosition = useRef(
    new Animated.ValueXY(CONSTANTS.SHAMAN_POSITION)
  ).current;
 
const getRandom=()=>{
  let random=Math.floor(Math.random() * (300 - 1 + 1)) + 1;
  return random;
}


  moveCoin = () => {
    Animated.timing(coinPosition, {
      toValue: { x: getRandom(), y: CONSTANTS.SCREEN_HEIGHT + 550 },
      duration: speed, // Длительность анимации в миллисекундах
      useNativeDriver: false, // Используем JavaScript анимацию
      easing: Easing.linear,
    }).start();
  };
  moveIndian = () => {
    Animated.timing(indianPosition, {
      toValue: { x: getRandom(), y: CONSTANTS.SCREEN_HEIGHT + 550 },
      duration: speed, // Длительность анимации в миллисекундах
      useNativeDriver: false, // Используем JavaScript анимацию
      easing: Easing.linear,
    }).start();
  };
  moveIndianWomen = () => {
    Animated.timing(indianWomenPosition, {
      toValue: { x: getRandom(), y: CONSTANTS.SCREEN_HEIGHT + 550 },
      duration: speed, // Длительность анимации в миллисекундах
      useNativeDriver: false, // Используем JavaScript анимацию
      easing: Easing.linear,
    }).start();
  };
  moveShaman = () => {
    Animated.timing(shamanPosition, {
      toValue: { x: 210, y: CONSTANTS.SCREEN_HEIGHT + 550 },
      duration: speed, // Длительность анимации в миллисекундах
      useNativeDriver: false, // Используем JavaScript анимацию
      easing: Easing.linear,
    }).start();
  };

  useEffect(() => {
    if (isGameRun && music) {
      playSound();
    }
  }, [music]);

  useEffect(() => {
    if (isGameRun) {
      coinPosition.addListener((value) => {
        const xPosition = value.x;
        const yPosition = value.y;
        if (
          arrowPosition.x >= xPosition &&
          arrowPosition.x <= xPosition + CONSTANTS.COIN_SIZE.width &&
          arrowPosition.y <= yPosition &&
          arrowPosition.y + CONSTANTS.ARROW_SIZE.height >= yPosition
        ) {
          Animated.timing(coinPosition).stop();
          setCoin((coin) => ({
            ...coin,
            quant: coin.quant + 1,
            visibility: false,
          }));
        }
      });
      return () => {
        coinPosition.removeAllListeners();
      };
    }
  }, [coinPosition, arrowPosition]);


//restartn animation
  useEffect(() => {
    shamanPosition.y.addListener(({value}) => {
    const yPosition=value;
    if(yPosition >= CONSTANTS.SCREEN_HEIGHT + 550&&speed>=2000){
      setSpeed((speed)=>speed-600);
      
      startGame();
    }
  });
  return () => {
    shamanPosition.y.removeAllListeners();
  };
}, [shamanPosition.y]);


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
    setCoin((coin) => ({
      ...coin,
      quant:0,
    }));
    setIsGameRun(false);
    console.log('game stop');
  };
  const startGame = () => {
    coinPosition.setValue({
      x: getRandom(),
      y: CONSTANTS.COIN_POSITION.y,
    });
    indianPosition.setValue({
      x: getRandom(),
      y: CONSTANTS.INDIAN_POSITION.y,
    });
    indianWomenPosition.setValue({
      x: getRandom(),
      y: CONSTANTS.INDIAN_WOMEN_POSITION.y,
    });
    shamanPosition.setValue({
      x: getRandom(),
      y: CONSTANTS.SHAMAN_POSITION.y,
    });
    setCoin((coin) => ({
      ...coin,
      visibility: true,
    }));
    setIsGameRun(true);
    moveCoin();
    moveIndian();
    moveIndianWomen();
    moveShaman();
    console.log('game start');
    console.log(speed);
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
        <Animated.View
          style={[
            { position: 'absolute', marginTop: 25 },
            { transform: coinPosition.getTranslateTransform() },
          ]}
        >
          {coin.visibility && <Coin />}
        </Animated.View>
        <Animated.View
          style={[
            {
              position: 'absolute',
              marginTop: 25,
              top: CONSTANTS.INDIAN_POSITION.y,
            },
            { transform: indianPosition.getTranslateTransform() },
          ]}
        >
          <Indian />
        </Animated.View>
        <Animated.View
          style={[
            {
              position: 'absolute',
              marginTop: 25,
              top: CONSTANTS.INDIAN_WOMEN_POSITION.y,
            },
            { transform: indianWomenPosition.getTranslateTransform() },
          ]}
        >
          <IndianWomen />
        </Animated.View>
        <Animated.View
          style={[
            {
              position: 'absolute',
              marginTop: 25,
              top: CONSTANTS.SHAMAN_POSITION.y,
            },
            { transform: shamanPosition.getTranslateTransform() },
          ]}
        >
          <Shaman />
        </Animated.View>
        <ScoreText>Coins:{isGameRun ? coin.quant : 0}$</ScoreText>
        <StartMessage isGameRun={isGameRun} />
        <Arrow arrowValueChange={arrowValueChange} />
      </Space>
    </TouchableWithoutFeedback>
  );
};

export default SportSprint;
