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
      height: 30,
      width: '90%',
      padding: 5,
      backgroundColor: '#F5F5DC',
      borderTopWidth: 2,
      borderLeftWidth: 2,
      borderColor: '#857A5E',
    },
    displayText: {
      fontFamily: 'monospace',
      textAlign: 'right',
      paddingRight: 4,
    },
  });

  export default CalculatorDisplay;