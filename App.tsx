import React, {useState} from 'react';
import {SafeAreaView, StyleSheet, Text, View, Switch} from 'react-native';

// Button Components
import WOITextButton from './src/buttons/WOITextButton';
import WOIParallelogramButton from './src/buttons/WOIParallelogramButton';
import WOIIconButton from './src/buttons/WOIIconButton';
import WOICheckBox from './src/checkbox/WOICheckBox';
import WOIRadioButton from './src/radiobutton/WOIRadioButton';
import WOISwitchButton from './src/switch/WOISwitchButton';

function App(): JSX.Element {
  const [toggle, setToggle] = useState(false);

  return (
    <SafeAreaView>
      <View style={[styles.container]}>
        {/* Heading */}
        <Text style={[styles.title]}>Button Components</Text>
        {/* Text Button Component */}
        <WOITextButton
          height={60}
          width={240}
          borderRadius={30}
          borderWidth={3}
          borderColor="black"
          text="Text Button"
          fontColor="#FFFFFF"
          fontSize={18}
          fontWeight="600"
          textTransform="capitalize"
          prefixIcon="https://reactjs.org/logo-og.png"
          suffixIcon="https://images.unsplash.com/photo-1526045612212-70caf35c14df"
          onPress={() => console.log('text button clicked')}
          isDisabled={false}
          backgroundColor="lightblue"
        />
        {/* Parallelogram Button Component */}
        <WOIParallelogramButton
          height={60}
          width={350}
          backgroundColor="#FF618B"
          text="Parallelogram Button"
          fontColor="#FFFFFF"
          fontSize={18}
          fontWeight="600"
          textTransform="capitalize"
          prefixIcon="https://reactjs.org/logo-og.png"
          suffixIcon="https://images.unsplash.com/photo-1526045612212-70caf35c14df"
          onPress={() => console.log('parallelogram button clicked')}
          isDisabled={false}
          tiltDirection="left"
          gradientColors={['pink', 'purple', 'blue']}
          gradientDirection="bottom"
        />
        {/* Icon Button Component */}
        <WOIIconButton
          size={50}
          backgroundColor="pink"
          icon="https://images.unsplash.com/photo-1526045612212-70caf35c14df"
          iconSize={20}
          iconBorderRadius={10}
          borderRadius={25}
          onPress={() => console.log('Icon button clicked')}
          isDisabled={false}
        />
        {/* Check Box Component */}
        <WOICheckBox
          size={32}
          borderRadius={8}
          borderWidth={3}
          activeBorderColor="#33B8FF"
          inActiveBorderColor="#D3D3D3"
          activeBackgroundColor="#FFFFFF"
          inActiveBackgroundColor="#FFFFFF"
          icon="https://cdn-icons-png.flaticon.com/512/3106/3106690.png"
          iconSize={20}
          isChecked={toggle}
          onPress={() => {
            setToggle(!toggle);
          }}
        />
        {/*Radio Button Component */}
        <WOIRadioButton
          size={24}
          activeBorderColor="#33B8FF"
          inActiveBorderColor="#D3D3D3"
          borderWidth={2}
          activeColor="#33B8FF"
          isSelected={toggle}
          fillSize={15}
          onPress={() => {
            setToggle(!toggle);
          }}
        />
        {/*Switch Button Component */}
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
          isActive={toggle}
          thumbActiveIcon="https://cdn-icons-png.flaticon.com/512/1400/1400310.png"
          thumbInActiveIcon="https://cdn-icons-png.flaticon.com/512/4445/4445942.png"
          thumbIconSize={20}
          onPress={() => {
            setToggle(!toggle);
          }}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    height: '100%',
    justifyContent: 'space-evenly',
  },
  title: {
    color: '#000000',
    fontSize: 20,
    fontWeight: '600',
  },
});

export default App;
