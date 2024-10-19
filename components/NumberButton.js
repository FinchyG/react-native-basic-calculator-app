import React from 'react';
import {StyleSheet, View, Button} from 'react-native';

function NumberButton(props) {
  
  return (
    <View style={styles.numberButton}>
      <Button
        color={'#5F9EA0'}
        onPress={props.onPress}
        num={props.num}
        title={props.title}
        accessibilityLabel={props.accessibilityLabel}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  numberButton: {
    width:'30%',
    height: '95%',
    borderTopWidth: 2,
    borderLeftWidth: 2,
    borderColor: '#1F9927',
  },
});

export default NumberButton;