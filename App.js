import React, { useState } from 'react';
import {StyleSheet, View} from 'react-native';

import CalculatorDisplay from './components/CalculatorDisplay';
import OperatorButton from './components/OperatorButton';
import NumberButton from './components/NumberButton';

function App() {
  
  // state variables
  const [displayValue, setDisplayValue] = useState('0');
  const [operator, setOperator] = useState(null);
  const [firstValue, setFirstValue] = useState('');

  // function to handle number inputs
  const handleNumberInput = (num) => {
    if (displayValue === '0') {
        setDisplayValue(num.toString());
    } else {
        setDisplayValue(displayValue + num);
    }
  };

  // function to handle operator inputs
  const handleOperatorInput = (operator) => {
    setOperator(operator);
    setFirstValue(displayValue);
    setDisplayValue('0');
  };

  // function to handle equal button press
  const handleEqual = () => {
    const num1 = parseFloat(firstValue);
    const num2 = parseFloat(displayValue);

    if (operator === '+') {
      setDisplayValue((num1 + num2).toString());
    } else if (operator === '-') {
        setDisplayValue((num1 - num2).toString());
    } else if (operator === '*') {
        setDisplayValue((num1 * num2).toString());
    } else if (operator === '/') {
        setDisplayValue((num1 / num2).toString());
    } else if (operator === '^') {
        setDisplayValue((Math.pow(num1, num2)).toString());
    } else if (operator === 'mod') {
        setDisplayValue((num1 % num2).toString());
    }

    setOperator(null);
    setFirstValue('');
  };

  // Function to handle clear button press
  const handleClear = () => {
      setDisplayValue('0');
      setOperator(null);
      setFirstValue('');
  };  

  return (
    <View>
      <View>
        <CalculatorDisplay displayValue={displayValue} />
      </View>
      <View style={styles.buttonRow}>
        <OperatorButton
          onPress={() => handleOperatorInput('+')}
          symbol='+'
          title='+'
        />
        <OperatorButton
          onPress={() => handleOperatorInput('-')}
          symbol='-'
          title='-'
        />
        <OperatorButton
          onPress={() => handleOperatorInput('*')}
          symbol='x'
          title='x'
        />
      </View>
      <View style={styles.buttonRow}>
        <OperatorButton
          onPress={() => handleOperatorInput('/')}
          symbol='÷'
          title='÷'
        />
        <OperatorButton
          onPress={() => handleOperatorInput('^')}
          symbol='^'
          title='^'
        />
        <OperatorButton
          onPress={() => handleOperatorInput('mod')}
          symbol='mod'
          title='mod'
        />
      </View>
      <View style={styles.buttonRow}>
        <NumberButton
          onPress={() => handleNumberInput(7)}
          num='7'
          title='7'
        />
        <NumberButton
          onPress={() => handleNumberInput(8)}
          num='8'
          title='8'
        />
        <NumberButton
          onPress={() => handleNumberInput(9)}
          num='9'
          title='9'
        />
      </View>      
      <View style={styles.buttonRow}>
        <NumberButton
          onPress={() => handleNumberInput(4)}
          num='4'
          title='4'
        />
        <NumberButton
          onPress={() => handleNumberInput(5)}
          num='5'
          title='5'
        />
        <NumberButton
          onPress={() => handleNumberInput(6)}
          num='6'
          title='6'
        />
      </View>
      <View style={styles.buttonRow}>
        <NumberButton
          onPress={() => handleNumberInput(1)}
          num='1'
          title='1'
        />
        <NumberButton
          onPress={() => handleNumberInput(2)}
          num='2'
          title='2'
        />
        <NumberButton
          onPress={() => handleNumberInput(3)}
          num='3'
          title='3'
        />
      </View>
      <View style={styles.buttonRow}>
        <NumberButton
          onPress={() => handleNumberInput(0)}
          num='0'
          title='0'
        />
        <OperatorButton 
          onPress={handleClear}
          symbol='C'
          title='C'
        />
        <OperatorButton 
          onPress={handleEqual}
          symbol='='
          title='='
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonRow: {
    width: '95%',
    height: 30,
  },
});

export default App;