import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';

// Button Components
import CapsuleButton from './Buttons/CapsuleButton';
import ParallelogramButton from './Buttons/ParallelogramButton';
import CircleButton from './Buttons/CircleButton';
import RectangleButton from './Buttons/RectangleButton';
import GradientButton from './Buttons/GradientButton';
import LoaderButton from './Buttons/LoaderButton';

function App(): JSX.Element {
  return (
    <SafeAreaView>
      <View style={[styles.container]}>
        {/* Heading */}
        <Text style={[styles.title]}>Button Components</Text>
        {/* Capsule Button Component */}
        <CapsuleButton
          height={60}
          width={240}
          backgroundColor="#33B8FF"
          borderColor="#33B8FF"
          borderWidth={2}
          text="Capsule Button"
          textColor="#FFFFFF"
          textSize={18}
          textWeight="600"
          textTransform="capitalize"
          prefixIcon="https://reactjs.org/logo-og.png"
          suffixIcon="https://images.unsplash.com/photo-1526045612212-70caf35c14df"
          onPress={() => console.log('capsule button clicked')}
          isDisabled={false}
        />
        <View style={{marginVertical: 16}} />
        {/* Parallelogram Button Component */}
        <ParallelogramButton
          height={60}
          width={300}
          backgroundColor="#FF618B"
          borderColor="#FF618B"
          borderWidth={2}
          text="Parallelogram Button"
          textColor="#FFFFFF"
          textSize={18}
          textWeight="600"
          textTransform="capitalize"
          prefixIcon="https://reactjs.org/logo-og.png"
          suffixIcon="https://images.unsplash.com/photo-1526045612212-70caf35c14df"
          onPress={() => console.log('parallelogram button clicked')}
          isDisabled={false}
        />
        <View style={{marginVertical: 16}} />
        {/* Capsule Button Component */}
        <CircleButton
          size={60}
          backgroundColor="#33B8FF"
          icon="https://reactjs.org/logo-og.png"
          onPress={() => console.log('circle button clicked')}
          isDisabled={false}
        />

        <View style={{marginVertical: 16}} />
        {/* Rectangle Button Component */}
        <RectangleButton
          height={60}
          width={240}
          backgroundColor="#33B8FF"
          borderColor="#33B8FF"
          borderWidth={2}
          borderRadius={16}
          text="Rectangle Button"
          textColor="#FFFFFF"
          textSize={18}
          textWeight="600"
          textTransform="capitalize"
          prefixIcon="https://reactjs.org/logo-og.png"
          suffixIcon="https://images.unsplash.com/photo-1526045612212-70caf35c14df"
          onPress={() => console.log('rectangle button clicked')}
          isDisabled={false}
        />

        <View style={{marginVertical: 16}} />
        <GradientButton
          height={60}
          width={240}
          text="Gradient Button"
          textColor="#FFFFFF"
          textSize={18}
          textWeight="600"
          textTransform="capitalize"
          onPress={() => console.log('Gradient button clicked')}
          isDisabled={false}
          gradientColors={['pink', 'blue', 'purple']}
          gradientDirection={'right-diagonal'}
        />

        <View style={{marginVertical: 16}} />
        <LoaderButton
          height={60}
          width={240}
          text="Loader Button"
          textColor="#000"
          textSize={18}
          textWeight="600"
          textTransform="capitalize"
          onPress={() => console.log('Gradient button clicked')}
          isDisabled={false}
          loading={true}
          loaderColor="#ffff"
          backgroundColor="green"
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    width: '100%',
  },
  title: {
    fontSize: 20,
    color: '#000000',
    fontWeight: '600',
    margin: 32,
  },
});

export default App;
