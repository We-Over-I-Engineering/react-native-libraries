/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

export {default as CapsuleButton} from './Buttons/CapsuleButton/index';
export {default as CircleButton} from './Buttons/CircleButton/index';
export {default as GradientButton} from './Buttons/GradientButton/index';
export {default as GradientIconButton} from './Buttons/GradientIconButton/index';
export {default as LoaderButton} from './Buttons/LoaderButton/index';
export {default as ParallelogramButton} from './Buttons/ParallelogramButton/index';
export {default as RectangleButton} from './Buttons/RectangleButton/index';

AppRegistry.registerComponent(appName, () => App);
