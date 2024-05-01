
import { FlatList, SafeAreaView, StyleSheet, Text, View, Button, Alert, Platform, StatusBar, Dimensions, useWindowDimensions } from 'react-native';

import React, { useState } from 'react';
import { useDeviceOrientation } from '@react-native-community/hooks';

const DATA = [
  {
    id: '1',
    title: 'First Item',
  },
  {
    id: '2',
    title: 'Second Item',
  },
  {
    id: '3',
    title: 'Third Item',
  },
  {
    id: '4',
    title: 'Fourth Item',
  },
  {
    id: '5',
    title: 'Fifth Item',
  },
  {
    id: '6',
    title: 'Sixth Item',
  },
  {
    id: '7',
    title: 'Seventh Item',
  },
  {
    id: '8',
    title: 'Eighth Item',
  },
  {
    id: '9',
    title: 'Ninth Item',
  },
  {
    id: '10',
    title: 'Tenth Item',
  },
];




const Item = ({ title }) => (
      <View style={styles.item}>
        <Button color="orange" title={title} onPress={() => Alert.alert("Alert", "Button pressed",[
        {text: 'OK', onPress: () => alert('OK Pressed')},
        {text: 'Cancel' , onPress: () => alert('Cancel Pressed')},
        ])}/>
      </View>
);

export default function App() {

 
  const renderItem = ({ item }) => <Item title={item.title} />;
  
  return (
    <SafeAreaView style={[styles.container,{height: useDeviceOrientation() === 'portrait' ? '100%' : '50%', }]}>
      <FlatList
      data={DATA}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
    />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    // height:  === 'portrait' ? '100%' : '50%',
  },
  item: {
    backgroundColor: '#777',
    marginVertical: 10,
    marginHorizontal: 16,
  },
});


