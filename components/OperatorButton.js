import React from 'react';
import {StyleSheet, Button} from 'react-native';

function OperatorButton(props) {
  
  return (
    <Button 
      style={styles.OperatorButton}
      onPress={props.onPress}
      symbol={props.symbol}
      title={props.symbol}    
    />
  );
}

const styles = StyleSheet.create({
  operatorButton: {
    width:'30%',
    height: '95%',
    margin: 1,
    backgroundColor:'#BC8F8F',
    textAlign: 'center',
    border: 1,
    borderColor: '#7A6666',
    borderRadius: 2,
  },
});

export default OperatorButton;