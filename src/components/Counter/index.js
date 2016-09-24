import React, { PropTypes } from 'react';
import { View, Text } from 'react-native';
import Button from '@components/Button';
import styles from './styles';

function Counter(props) {
  const { value = 0, decrement, increment } = props;

  return (
    <View style={styles.container}>
      <Button onPress={() => decrement()}>-</Button>
      <Text style={styles.value}>{value}</Text>
      <Button onPress={() => increment()}>+</Button>
    </View>
  );
}

Counter.propTypes = {
  value: PropTypes.number,
  decrement: PropTypes.func,
  increment: PropTypes.func,
};

export default Counter;
