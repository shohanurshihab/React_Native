
import React, { useEffect, useState } from 'react';
import {
  Dimensions,
  FlatList,
  Pressable,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  useColorScheme,
  View,
} from 'react-native';

//Constants
import { currencyByTaka } from './constants';
//Component
import CurrencyButton from './components/CurrencyButton';

import Snackbar from 'react-native-snackbar';


function App(): React.JSX.Element {
  const [inputValue, setInputValue] = useState('')
  const [resultValue, setResultValue] = useState('')
  const [targetCurrency, setTargetCurrency] = useState('')
  const [screenOrientation, setScreenOrientation] = useState('portrait'); // Initialize with portrait

  useEffect(() => {
    const updateOrientation = () => {
      const dim = Dimensions.get('screen');
      setScreenOrientation(dim.height >= dim.width ? 'portrait' : 'landscape');
    };
    Dimensions.addEventListener('change', updateOrientation);
  }, []);

  const reset = () => {
    setInputValue('')
    setResultValue('')
    setTargetCurrency('')
  }
  const buttonPressed = (targetValue: Currency) => {
    if (!inputValue) {
      Snackbar.show({
        text: 'Please enter an amount',
        backgroundColor: '#ea7773',
        textColor: 'white'
      })
    } else if (!/^\d*\.?\d*$/.test(inputValue)) {
      Snackbar.show({
        text: 'Please enter a valid number',
        backgroundColor: '#ea7773',
        textColor: 'white'
      })
    } else {
      const inputAmount = parseFloat(inputValue);
      const resultAmount = inputAmount * targetValue.value;
      const result = `${targetValue.symbol} ${resultAmount.toFixed(2)} 💸`;
      setResultValue(result);
      setTargetCurrency(targetValue.name);
    }
  }

  return (
    <>
      <View style={styles.container}>
        <StatusBar backgroundColor={'#706fd3'} />
        <View style={[
          styles.topContainer,
          { minHeight: screenOrientation === 'portrait' ? 0 : '40%' },
        ]}>
          <Text style={styles.taka}>৳</Text>
          <View style={styles.takasContainer}>
            <TextInput
              maxLength={14}
              value={inputValue}
              clearButtonMode='always' //only for iOS
              onChangeText={setInputValue}
              keyboardType='number-pad'
              style={styles.takaInput}
              placeholderTextColor='#777777'
              placeholder='Enter amount in Takas'
            />
          </View>
          {resultValue && (
            <Text style={styles.resultTxt} >
              {resultValue}
            </Text>
          )}
          <View>
            <Pressable
              style={styles.resetBtn}
              onPress={reset}
            >
              <Text style={styles.resetTxt}>Reset</Text>
            </Pressable>
          </View>
        </View>
        <View style={styles.bottomContainer}>
          <FlatList
            scrollEnabled={true}
            numColumns={2}
            data={currencyByTaka}
            keyExtractor={item => item.name}
            renderItem={({ item }) => (
              <Pressable
                style={[
                  styles.button,
                  targetCurrency === item.name && styles.selected
                ]}
                onPress={() => buttonPressed(item)}
              >
                <CurrencyButton {...item} />
              </Pressable>
            )}
          />
        </View>
      </View>

    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#706fd3',
    alignItems: 'center'
  },
  topContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%'
  },
  resultTxt: {
    fontSize: 32,
    color: '#000',
    fontWeight: '800',
    borderColor: '#fff',
    padding: 0,
    borderWidth: 3,
    borderRadius: 10,
    backgroundColor: '#feaa79',
    marginTop: 20,
    minWidth: 300,
    textAlign: 'center',
    textAlignVertical: 'center',

  },
  taka: {
    marginRight: 8,
    fontSize: 26,
    color: '#000000',
    fontWeight: '800',
    left: '-40%',
    top: '20%',
  },
  takasContainer: {
    flexDirection: 'row',
    flex: 1,
    maxHeight: '30%',
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: '#fff',
    // width:250

  },
  takaInput: {
    fontSize: 20,
    textAlign: 'center',
    borderWidth: 3,
    borderRadius: 10,
    backgroundColor: '#f7f1e3',
    color: '#000',
    minWidth: '70%',

  },
  inputAmountField: {
    height: 40,
    width: 200,
    padding: 8,
    borderWidth: 1,
    borderRadius: 4,
    borderColor: '$fff',
    backgroundColor: '#000',
  },
  resetBtn: {
    marginTop: 10,
    backgroundColor: '#ff0000',
    padding: 8,
    borderRadius: 4,
  },
  resetTxt: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 18,
  },
  bottomContainer: {
    flex: 3,
    width: '100%',
  },
  button: {
    flex: 1,

    margin: 12,
    height: 120,

    borderRadius: 12,
    backgroundColor: '#fff',
    elevation: 2,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowColor: '#333',
    shadowOpacity: 0.1,
    shadowRadius: 1,
    justifyContent: 'center',

  },
  selected: {
    backgroundColor: '#ffeaa7',
  },
});


export default App;
