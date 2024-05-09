import { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";


const Calculator = () => {
  const [result, setResult] = useState('0');

  const handleButtonPress = (value: string) => {
    if (value === 'AC') {
      setResult('0');
    } else if (value === '=') {
      calculateResult();
    } else if (value === '+/-') {
      toggleSign();
    } else if (value === '%') {
      calculatePercentage();
    } else {
      setResult(prevResult => (prevResult === '0' ? value : prevResult + value));
    }
  };

  const calculateResult = () => {
    try {
      // eslint-disable-next-line no-eval
      const calculatedResult = eval(result);
      setResult(calculatedResult.toString());
    } catch (error) {
      setResult('Error');
    }
  };

  const toggleSign = () => {
    setResult(prevResult => {
      if (prevResult.startsWith('-')) {
        return prevResult.slice(1);
      } else {
        return '-' + prevResult;
      }
    });
  };

  const calculatePercentage = () => {
    setResult(prevResult => {
      const value = parseFloat(prevResult);
      const percentageValue = value / 100;
      return percentageValue.toString();
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.result}>{result}</Text>
      <View style={styles.buttonRow}>
        <TouchableOpacity style={[styles.button, styles.grayButton]} onPress={() => handleButtonPress('AC')}>
          <Text style={styles.buttonText}>AC</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.grayButton]} onPress={() => handleButtonPress('+/-')}>
          <Text style={styles.buttonText}>+/-</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.grayButton]} onPress={() => handleButtonPress('%')}>
          <Text style={styles.buttonText}>%</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.orangeButton]} onPress={() => handleButtonPress('/')}>
          <Text style={styles.buttonText}>/</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.buttonRow}>
        <TouchableOpacity style={styles.button} onPress={() => handleButtonPress('7')}>
          <Text style={styles.buttonText}>7</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => handleButtonPress('8')}>
          <Text style={styles.buttonText}>8</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => handleButtonPress('9')}>
          <Text style={styles.buttonText}>9</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.orangeButton]} onPress={() => handleButtonPress('*')}>
          <Text style={styles.buttonText}>*</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.buttonRow}>
        <TouchableOpacity style={styles.button} onPress={() => handleButtonPress('4')}>
          <Text style={styles.buttonText}>4</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => handleButtonPress('5')}>
          <Text style={styles.buttonText}>5</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => handleButtonPress('6')}>
          <Text style={styles.buttonText}>6</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.orangeButton]} onPress={() => handleButtonPress('-')}>
          <Text style={styles.buttonText}>-</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.buttonRow}>
        <TouchableOpacity style={styles.button} onPress={() => handleButtonPress('1')}>
          <Text style={styles.buttonText}>1</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => handleButtonPress('2')}>
          <Text style={styles.buttonText}>2</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => handleButtonPress('3')}>
          <Text style={styles.buttonText}>3</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.orangeButton]} onPress={() => handleButtonPress('+')}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.buttonRow}>
        <TouchableOpacity style={[styles.button, styles.zeroButton]} onPress={() => handleButtonPress('0')}>
          <Text style={styles.buttonText}>0</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => handleButtonPress('.')}>
          <Text style={styles.buttonText}>.</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.orangeButton]} onPress={() => handleButtonPress('=')}>
          <Text style={styles.buttonText}>=</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    justifyContent: 'flex-end',
  },
  result: {
    color: '#fff',
    fontSize: 60,
    textAlign: 'right',
    marginRight: 20,
    marginBottom: 10,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  button: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: '#333',
    justifyContent: 'center',
    alignItems: 'center',
  },
  grayButton: {
    backgroundColor: '#a6a6a6',
  },
  orangeButton: {
    backgroundColor: '#ff9501',
  },
  zeroButton: {
    width: 160,
    borderRadius: 35,
    paddingHorizontal: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 30,
  },
});

export default Calculator;