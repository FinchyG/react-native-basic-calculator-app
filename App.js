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
    <View style={styles.screenView}>
      <View style={styles.buttonRow}>
        <CalculatorDisplay displayValue={displayValue} />
      </View>
      <View style={styles.buttonRow}>
        <OperatorButton
          onPress={() => handleOperatorInput('+')}
          symbol='+'
          title='+'
          accessibilityLabel='add'
        />
        <OperatorButton
          onPress={() => handleOperatorInput('-')}
          symbol='-'
          title='-'
          accessibilityLabel='subtract'
        />
        <OperatorButton
          onPress={() => handleOperatorInput('*')}
          symbol='x'
          title='x'
          accessibilityLabel='multiply'
        />
      </View>
      <View style={styles.buttonRow}>
        <OperatorButton
          onPress={() => handleOperatorInput('/')}
          symbol='÷'
          title='÷'
          accessibilityLabel='divide'
        />
        <OperatorButton
          onPress={() => handleOperatorInput('^')}
          symbol='^'
          title='^'
          accessibilityLabel='power'
        />
        <OperatorButton
          onPress={() => handleOperatorInput('mod')}
          symbol='mod'
          title='mod'
          accessibilityLabel='modulo'
        />
      </View>
      <View style={styles.buttonRow}>
        <NumberButton
          onPress={() => handleNumberInput(7)}
          num='7'
          title='7'
          accessibilityLabel='seven'
        />
        <NumberButton
          onPress={() => handleNumberInput(8)}
          num='8'
          title='8'
          accessibilityLabel='eight'
        />
        <NumberButton
          onPress={() => handleNumberInput(9)}
          num='9'
          title='9'
          accessibilityLabel='nine'
        />
      </View>      
      <View style={styles.buttonRow}>
        <NumberButton
          onPress={() => handleNumberInput(4)}
          num='4'
          title='4'
          accessibilityLabel='four'
        />
        <NumberButton
          onPress={() => handleNumberInput(5)}
          num='5'
          title='5'
          accessibilityLabel='five'
        />
        <NumberButton
          onPress={() => handleNumberInput(6)}
          num='6'
          title='6'
          accessibilityLabel='six'
        />
      </View>
      <View style={styles.buttonRow}>
        <NumberButton
          onPress={() => handleNumberInput(1)}
          num='1'
          title='1'
          accessibilityLabel='one'
        />
        <NumberButton
          onPress={() => handleNumberInput(2)}
          num='2'
          title='2'
          accessibilityLabel='two'
        />
        <NumberButton
          onPress={() => handleNumberInput(3)}
          num='3'
          title='3'
          accessibilityLabel='three'
        />
      </View>
      <View style={styles.buttonRow}>
        <NumberButton
          onPress={() => handleNumberInput(0)}
          num='0'
          title='0'
          accessibilityLabel='zero'
        />
        <OperatorButton 
          onPress={handleClear}
          symbol='C'
          title='C'
          accessibilityLabel='clear'
        />
        <OperatorButton 
          onPress={handleEqual}
          symbol='='
          title='='
          accessibilityLabel='equals'
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screenView: {
    flex:1,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    height: 30,
  },
});

export default App;