import React, { useState,useContext } from 'react';
import { View, Text, ImageBackground, TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';
import { useNavigation } from '@react-navigation/native';
import { CONSTANTS } from '../constants';
import { AppStateContext } from './AppStateContext';
import PlayBtn from '../components/Btns/PlayBtn';
import ResetBtn from '../components/Btns/ResetBtn';
import QuantityBtn from '../components/Btns/QuantityBtn';
import VibroBtn from '../components/Btns/VibroBtn';
import SoundBtn from '../components/Btns/SoundBtn';
const bgImage = require('../assets/bgMenu.png');
const Space = styled(ImageBackground)`
  flex: 1;
  margin-top: 25px;
  margin-bottom: 25px;
  overflow: hidden;
  justify-content: center;
  align: center;
`;

const StyledText = styled.Text`
  margin-top: 10px;
  color: #d9ff00;
  font-size: 30px;
  font-weight: 700;
  border: 2px #5105f5 solid;
  padding: 7px;
  border-radius: 5px;
`;
const StyledMenu = styled.Text`
  margin-top: 10px;
  color: #ffffff;
  font-size: 50px;
  font-weight: 700;
  text-align: center;
  padding: 7px;
`;

const Menu = () => {
  const contextValue=useContext(AppStateContext);
  const {quantity,vibration,updateQuantity,updateVibration}=contextValue;
  const navigation = useNavigation();
  const changeVibro = () => {
    if (vibration) {
      updateVibration(false);
    }else{
      updateVibration(true);
    }
  };
  const changeQuantity = () => {
    if (quantity <= 2) {
      updateQuantity((quantity) => quantity + 1);
    }
    
  };
  const play = () => {
    navigation.navigate('SportSprint', { quantity });
  };
  const defaultOption = () => {
    updateVibration(false);
    updateQuantity(CONSTANTS.GAME_QUANTITY);
  };
  
  return (
    <Space source={bgImage}>
      <StyledMenu>Menu</StyledMenu>
      <PlayBtn onPress={play} text={'Play'} />
      <QuantityBtn
        onPress={changeQuantity}
        text={'Quantity indians UP:'}
        quantity={quantity}
      />
      <VibroBtn onPress={changeVibro} vibro={vibration} text={'Vibration'}/>
      <ResetBtn onPress={defaultOption} text={'Reset options'} />
    </Space>
  );
};

export default Menu;
