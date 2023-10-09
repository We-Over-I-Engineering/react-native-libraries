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
