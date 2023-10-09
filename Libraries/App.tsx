import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

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
          elevation={10}
          // gradientColors={['pink', 'purple', 'blue']}
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
          elevation={20}
          gradientColors={['pink', 'purple', 'blue']}
          gradientDirection="bottom"
        />

        <View style={{marginVertical: 16}} />

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

  parallelogram: {
    width: 150,
    height: 100,
  },
  parallelogramInner: {
    position: 'absolute',
    left: 0,
    top: 0,
    backgroundColor: 'transparent',
    width: 150,
    height: 100,
  },
  parallelogramRight: {
    top: 0,
    right: -50,
    position: 'absolute',
    transform: [{rotate: '180deg'}],
    // minHeight: 20,
  },
  parallelogramLeft: {
    top: 0,
    left: -50,
    position: 'absolute',
  },

  triangle: {
    width: 0,
    // height: 0,
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    borderLeftWidth: 50,
    borderRightWidth: 50,
    borderBottomWidth: 100,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: 'pink',
    minHeight: 20,
  },

  triangleDown: {
    transform: [{rotate: '180deg'}],
  },
});

export default App;
