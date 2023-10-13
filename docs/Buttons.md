# We Over I Button Components

We Over I button components are reusable React native components for creating interactive buttons in your react native application.

## Components

- [We Over I Button Components](#we-over-i-button-components)
  - [Components](#components)
  - [**Getting Started**](#getting-started)
    - [WOI Text Button](#woi-text-button)
    - [**Usage**](#usage)
    - [WOI Icon Button](#woi-icon-button)
    - [**Icon Button Usage**](#icon-button-usage)
    - [WOI Parallelogram Button](#woi-parallelogram-button)
    - [**Parallelogram Button Usage**](#parallelogram-button-usage)
    - [WOI CheckBox](#woi-checkbox)
    - [**Checkbox Usage**](#checkbox-usage)
    - [WOI Radio Button](#woi-radio-button)
    - [**Radio Button Usage**](#radio-button-usage)
    - [WOI Switch Button](#woi-switch-button)
    - [**Switch Button Usage**](#switch-button-usage)

## **Getting Started**

```js
import {
  WOITextButton,
  WOIIconButton,
  WOIParallelogramButton,
} from 'woi-react-native-components';
```

### WOI Text Button

WOI Text Button component accepts the following props:

| Props             | Type     |
| ----------------- | -------- |
| width             | Number   |
| height            | Number   |
| backgroundColor   | String   |
| borderColor       | String   |
| borderWidth       | Number   |
| borderRadius      | Number   |
| gradientColors    | string[] |
| gradientDirection | String   |
| text              | String   |
| fontColor         | String   |
| fontSize          | Number   |
| fontWeight        | Any      |
| fontFamily        | String   |
| textTransform     | Any      |
| prefixIcon        | Any      |
| suffixIcon        | Any      |
| iconSize          | Number   |
| onPress           | Function |
| isDisabled        | Boolean  |
| isLoading         | Boolean  |
| elevation         | Number   |

### **Usage**

```js
import {WOITextButton} from 'woi-react-native-components';

const textButtonWidget = () => {
  <WOITextButton
    width={250}
    height={50}
    backgroundColor="#e64178"
    borderColor="#ffffff"
    borderWidth={3}
    borderRadius={20}
    gradientColors={['purple', 'yellow']}
    gradientDirection="left"
    text="WOI Text Button"
    fontColor="#ffffff"
    fontSize={16}
    fontWeight={400}
    fontFamily="Roboto"
    textTransform="capitalize"
    prefixIcon="https://cdn-icons-png.flaticon.com/512/271/271220.png"
    suffixIcon="https://cdn-icons-png.flaticon.com/512/32/32213.png"
    iconSize={400}
    onPress={() => console.log('On Press called')}
    isDisabled={false}
    isLoading={false}
    elevation={8}
  />;
};
```

### WOI Icon Button

WOI Icon Button component accepts the following props:

| Props            | Type     |
| ---------------- | -------- |
| size             | String   |
| backgroundColor  | String   |
| borderColor      | String   |
| borderWidth      | Number   |
| borderRadius     | Number   |
| elevation        | Number   |
| icon             | String   |
| iconColor        | String   |
| iconsSize        | Number   |
| iconBorderRadius | Number   |
| onPress          | Function |
| isDisabled       | Boolean  |

### **Icon Button Usage**

```js
import {WOIIconButton} from 'woi-react-native-components';

const iconButtonWidget = () => {
  <WOIIconButton
    size={50}
    backgroundColor="#FFFFFF"
    borderColor="#007DFF"
    borderWidth={3}
    borderRadius={100}
    elevation={8}
    icon="https://www.pngmart.com/files/15/Circle-Facebook-Logo-PNG-Pic.png"
    iconColor="#FFFFFF"
    iconsSize={32}
    iconBorderRadius={8}
    onPress={() => console.log('On Press called')}
    isDisabled={false}
  />;
};
```

### WOI Parallelogram Button

WOI Parallelogram Button component accepts the following props:

| Props             | Type     |
| ----------------- | -------- |
| width             | Number   |
| height            | Number   |
| backgroundColor   | String   |
| borderColor       | String   |
| borderWidth       | Number   |
| gradientColors    | string[] |
| gradientDirection | String   |
| text              | String   |
| fontColor         | String   |
| fontSize          | Number   |
| fontWeight        | Any      |
| fontFamily        | String   |
| textTransform     | Any      |
| prefixIcon        | String   |
| suffixIcon        | String   |
| iconSize          | Number   |
| onPress           | Function |
| isDisabled        | Boolean  |
| isLoading         | Boolean  |
| elevation         | Number   |
| tiltDirection     | String   |

### **Parallelogram Button Usage**

```js
import {WOIParallelogramButton} from 'woi-react-native-components';

const parallelogramButtonWidget = () => {
  <WOIParallelogramButton
    width={250}
    height={50}
    backgroundColor="#e64178"
    borderColor="#e64178"
    borderThickness={3}
    borderRadius={20}
    gradientColors={['purple', 'yellow']}
    gradientDirection="left"
    text="WOI Parallelogram Button"
    fontColor="#ffffff"
    fontSize={16}
    fontWeight={400}
    fontFamily="Roboto"
    textTransform="capitalize"
    prefixIcon="https://cdn-icons-png.flaticon.com/512/271/271220.png"
    suffixIcon="https://cdn-icons-png.flaticon.com/512/32/32213.png"
    iconSize={16}
    onPress={() => console.log('On Press called')}
    isDisabled={true}
    isLoading={false}
    elevation={8}
    tiltDirection="left"
  />;
};
```

### WOI CheckBox

WOI CheckBox component accepts the following props:

| Props                   | Type     |
| ----------------------- | -------- |
| activeBackgroundColor   | String   |
| activeBorderColor       | String   |
| borderRadius            | Number   |
| borderWidth             | Number   |
| icon                    | String   |
| iconSize                | Number   |
| inActiveBackgroundColor | String   |
| inActiveBorderColor     | String   |
| isChecked               | Boolean  |
| onPress                 | Function |
| size                    | Number   |

### **Checkbox Usage**

```js
import {WOICheckBox} from 'woi-react-native-components';

const WOICheckBoxWidget = () => {
  <WOICheckBox
    size={32}
    borderRadius={8}
    borderWidth={3}
    activeBorderColor="#33B8FF"
    inActiveBorderColor="#D3D3D3"
    activeBackgroundColor="#FFFFFF"
    inActiveBackgroundColor="#FFFFFF"
    icon="https://cdn-icons-png.flaticon.com/512/3106/3106690.png"
    iconSize={36}
    isChecked={false}
  />;
};
```

### WOI Radio Button

WOI Radio Button component accepts the following props:

| Props               | Type     |
| ------------------- | -------- |
| activeBorderColor   | String   |
| activeColor         | String   |
| borderWidth         | Number   |
| fillSize            | Number   |
| inActiveBorderColor | String   |
| isSelected          | Boolean  |
| onPress             | Function |
| size                | Number   |

### **Radio Button Usage**

```js
import {WOIRadioButton} from 'woi-react-native-components';

const WOIRadioButtonWidget = () => {
  <WOIRadioButton
    size={24}
    activeBorderColor="#33B8FF"
    inActiveBorderColor="#D3D3D3"
    borderWidth={2}
    activeColor="#33B8FF"
    inActiveColor="#D3D3D3"
    isSelected={false}
  />;
};
```

### WOI Switch Button

WOI Switch Button component accepts the following props:

| Props              | Type     |
| ------------------ | -------- |
| isActive           | Boolean  |
| onPress            | Function |
| padding            | Number   |
| thumbActiveColor   | String   |
| thumbActiveIcon    | String   |
| thumbBorderColor   | String   |
| thumbBorderRadius  | Number   |
| thumbBorderWidth   | Number   |
| thumbIconSize      | Number   |
| thumbInActiveColor | String   |
| thumbInActiveIcon  | String   |
| thumbSize          | Number   |
| trackActiveColor   | String   |
| trackBorderColor   | String   |
| trackBorderRadius  | Number   |
| trackBorderWidth   | Number   |
| trackHeight        | Number   |
| trackInActiveColor | String   |
| trackWidth         | Number   |

### **Switch Button Usage**

```js
import {WOISwitchButton} from 'woi-react-native-components';

const WOISwitchButtonWidget = () => {
  <WOISwitchButton
    trackWidth={60}
    trackHeight={24}
    padding={4}
    trackBorderRadius={50}
    trackBorderColor="#33B8FF"
    trackBorderWidth={2}
    trackActiveColor="#33B8FF"
    trackInActiveColor="#D3D3D3"
    thumbSize={24}
    thumbBorderRadius={50}
    thumbBorderColor="#FFFFFF"
    thumbBorderWidth={2}
    thumbActiveColor="#FFFFFF"
    thumbInActiveColor="#D3D3D3"
    isActive={false}
    thumbActiveIcon="https://cdn-icons-png.flaticon.com/512/1400/1400310.png"
    thumbInActiveIcon="https://cdn-icons-png.flaticon.com/512/4445/4445942.png"
    thumbIconSize={20}
  />;
};
```
