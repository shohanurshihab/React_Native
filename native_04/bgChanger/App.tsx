

import React, { useState } from 'react';
import type {PropsWithChildren} from 'react';
import {
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';





function App(): React.JSX.Element {
  const [randomBg, setRandomBG] = useState('#ffffff');
  const [circleBg, setCircleBg] = useState('#ffffff');
  const [squareBg, setSquareBg] = useState('#ffffff');
  const [rectangleBg, setRectangleBg] = useState('#ffffff');
  const [traingleBg, setTriangleBg] = useState('#ffffff');

  const generateColor = () => {
    const hexRange = '0123456789ABCDEF'
    let color = '#'

    for (let i = 0; i < 6; i++) {
      color += hexRange[Math.floor(Math.random() * 16)]      
    }
    setRandomBG(color)
    setCircleBg(color.substring(0,1) +Math.floor(Math.random() * 6).toString()+ color.substring(2,6)+'3')
    setSquareBg(color.substring(0,1) +'F'+ color.substring(5,6)+'0')
    setRectangleBg(color.substring(0,1) +'0'+ color.substring(5,6)+'1')
    setTriangleBg(color.substring(0,1) +'8'+ color.substring(5,6)+'5')
  }


  return (
<>
<StatusBar backgroundColor={randomBg}/>
<View style={[styles.container, {backgroundColor: randomBg}]}>
<View style={[styles.circle, {backgroundColor: circleBg}]}></View>
<View style={[styles.square, {backgroundColor: squareBg}]}></View>
  <TouchableOpacity onPress={generateColor}>
    <View style={styles.actionBtn}>
      <Text style={styles.actionBtnTxt}>Press me</Text>
    </View>
  </TouchableOpacity>
<View style={[styles.rectangle, {backgroundColor: rectangleBg}]}></View>
<View style={[styles.triangle, {backgroundColor: randomBg}, {borderBottomColor:traingleBg}]}></View>
</View>
</>  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  actionBtn:{
    borderRadius:12,
    backgroundColor: '#6a1b4d',
    paddingVertical: 30,
    paddingHorizontal: 40
  },
  actionBtnTxt:{
    fontSize:24,
    textTransform:'uppercase',
    color:'#fff'
  },
  circle:{
    backgroundColor:'#000',
    width: 150,
    height: 150,
    borderRadius: 150/2,
    borderColor:'#fff',
    borderWidth: 5,
    position: 'absolute',
    left: '5%',
    top: '5%'
  },
  square:{
    backgroundColor:'#000',
    width: 150,
    height: 150,
    borderColor:'#fff',
    borderWidth: 5,
    position: 'absolute',
    right: '5%',
    top: '5%'
  },
  rectangle:{
    backgroundColor:'#000',
    width: 180,
    height: 120,
    borderColor:'#fff',
    borderWidth: 5,
    position: 'absolute',
    left: '5%',
    bottom: '5%'
  },
  triangle:{
    position: 'absolute',
    right: '5%',
    bottom: '5%',
    width: 0,
    height: 0,
    backgroundColor: '#000',
    borderStyle: 'solid',
    borderLeftWidth: 75,
    borderRightWidth: 75,
    borderBottomWidth: 150,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: 'red'
  }

});

export default App;
