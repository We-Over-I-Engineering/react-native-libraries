import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';

// Button Components
import CapsuleButton from './Buttons/CapsuleButton';
import ParallelogramButton from './Buttons/ParallelogramButton';

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
          backgroundColor='#33B8FF'
          borderColor="#33B8FF"
          borderWidth={2}
          text="Capsule Button"
          textColor='#FFFFFF'
          textSize={18}
          textWeight='600'
          textTransform='capitalize'
          prefixIcon='https://reactjs.org/logo-og.png'
          suffixIcon='https://images.unsplash.com/photo-1526045612212-70caf35c14df'
          onPress={() => console.log("capsule button clicked")}
          isDisabled={false}
        />
        <View style={{ marginVertical: 16 }} />
        {/* Parallelogram Button Component */}
        <ParallelogramButton
          height={60}
          width={300}
          backgroundColor='#FF618B'
          borderColor="#FF618B"
          borderWidth={2}
          text="Parallelogram Button"
          textColor='#FFFFFF'
          textSize={18}
          textWeight='600'
          textTransform='capitalize'
          prefixIcon='https://reactjs.org/logo-og.png'
          suffixIcon='https://images.unsplash.com/photo-1526045612212-70caf35c14df'
          onPress={() => console.log("parallelogram button clicked")}
          isDisabled={false}
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
    width: '100%'
  },
  title: {
    fontSize: 20,
    color: '#000000',
    fontWeight: '600',
    margin: 32
  },
});

export default App;
