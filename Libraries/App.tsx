/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';

import {
  SafeAreaView,
  StyleSheet,
  Image
} from 'react-native';

import CapsuleButton from './Buttons/CapsuleButton/CapsuleButton';

function App(): JSX.Element {

  return (
    <SafeAreaView >
      <CapsuleButton  height={50} width={200} backgroundColor='pink' borderColor="purple" text='Hello World'
  textStyle={{fontWeight:'500'}}
  prefixIcon={<Image style={{backgroundColor:'purple', height:20, width:20, borderRadius:10}}/>}
  suffixIcon={null}
  padding={20} onPress={()=>console.log("capsule button clicked")} 
  disable={false}/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
