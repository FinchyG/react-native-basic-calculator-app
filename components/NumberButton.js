import React from 'react';
import {StyleSheet, Button} from 'react-native';

function NumberButton(props) {
  
  return (
    <Button
      style={styles.numberButton}
      onPress={props.onPress}
      num={props.num}
      title={props.num}
    />
  );
}

const styles = StyleSheet.create({
  numberButton: {
    width:'30%',
    height: '95%',
    margin: 1,
    backgroundColor:'#5F9EA0',
    textAlign: 'center',
    border: 1,
    borderColor: '#2F8747',
    borderRadius: 2,
  },
});

export default NumberButton;