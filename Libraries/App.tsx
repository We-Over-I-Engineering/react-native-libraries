import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';

// Button Components
import WOITextButton from './src/buttons/WOITextButton';
import WOIParallelogramButton from './src/buttons/WOIParallelogramButton';
import WOIIconButton from './src/buttons/WOIIconButton';
function App(): JSX.Element {
  return (
    <SafeAreaView>
      <View style={[styles.container]}>
        {/* Heading */}
        <Text style={[styles.title]}>Button Components</Text>
        <View style={{marginVertical: 16}} />
        {/* Text Button Component */}
        <WOITextButton
          height={60}
          width={240}
          borderRadius={16}
          text="Text Button"
          fontColor="#FFFFFF"
          fontSize={18}
          fontWeight="600"
          textTransform="capitalize"
          prefixIcon="https://reactjs.org/logo-og.png"
          suffixIcon="https://images.unsplash.com/photo-1526045612212-70caf35c14df"
          onPress={() => console.log('text button clicked')}
          isDisabled={false}
          backgroundColor="blue"
          elevation={10}
        />
        <View style={{marginVertical: 16}} />
        {/* Parallelogram Button Component */}
        <WOIParallelogramButton
          height={60}
          width={300}
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
          skew="25"
          skewType="right"
          elevation={10}
          gradientColors={['pink', 'purple', 'blue']}
        />
        <View style={{marginVertical: 16}} />
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
          elevation={10}
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
