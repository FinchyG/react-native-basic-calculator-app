import React from "react";
import {StyleSheet, Text, View} from 'react-native';

function CalculatorDisplay(props) {
  
    return (
        <View style={styles.displayView}>
            <Text style={styles.displayText}>
                {props.displayValue}
            </Text>
        </View>
    );
  }

  const styles = StyleSheet.create({
    displayView: {
      width: '95%',
      height: 30,
      padding: 5,
      backgroundColor: '#F5F5DC',
      borderWidth: 1,
      borderColor: '#D3D3D3',
    },
    displayText: {
      fontFamily: 'monospace',
      textAlign: 'right',
      paddingRight: 4,
    },
  });

  export default CalculatorDisplay;