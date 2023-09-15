import { Dimensions } from 'react-native';
export const CONSTANTS = {
  SCREEN_HEIGHT: Dimensions.get('screen').height,
  SCREEN_WIDTH: Dimensions.get('screen').width,
  ARROW_POSITION: { x: 175, y: 490 },
  STONE_SIZE: { width: 150, height: 119 },
  STONE_POSITION: { x: 130, y: -150 },
  STAMP_SIZE: { width: 150, height: 92 },
  STAMP_POSITION: { x: 120, y:-250 },
  LOG_SIZE: { width: 150, height: 76 },
  LOG_POSITION: { x: -30, y:-450 },
  ARROW_SIZE: { width: 12, height: 120 },
  GAME_QUANTITY: 1,
  GAME_VIBRO:false,
};
