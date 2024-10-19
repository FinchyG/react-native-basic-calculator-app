import React from 'react';
import {StyleSheet, View, Button} from 'react-native';

function OperatorButton(props) {
  
  return (
    <View style={styles.operatorButton}>
      <Button 
        color={'#BC8F8F'}
        onPress={props.onPress}
        symbol={props.symbol}
        title={props.title}
        accessibilityLabel={props.accessibilityLabel}    
      />
    </View>
  );
}

const styles = StyleSheet.create({
  operatorButton: {
    width:'30%',
    height: '95%',
    borderTopWidth: 2,
    borderLeftWidth: 2,
    borderColor: '#824321',
  },
});

export default OperatorButton;