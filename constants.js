import { Dimensions } from 'react-native';
export const CONSTANTS = {
  SCREEN_HEIGHT: Dimensions.get('screen').height,
  SCREEN_WIDTH: Dimensions.get('screen').width,
  RUNNER_POSITION: { x: 175, y: 490 },
  STONE_SIZE: { width: 150, height: 119 },
  STONE_POSITION: { x: 130, y: -150 },
  STAMP_SIZE: { width: 150, height: 92 },
  STAMP_POSITION: { x: 120, y:-250 },
  LOG_SIZE: { width: 150, height: 76 },
  LOG_POSITION: { x: -30, y:-450 },
  RUNNER_SIZE: { width: 100, height: 86 },
  GAME_QUANTITY: 1,
};
