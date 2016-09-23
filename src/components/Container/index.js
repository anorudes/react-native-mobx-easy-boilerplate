import React, { Element } from 'react';
import { View } from 'react-native';
import styles from './styles';

function Container(props) {
  const { children } = props;

  return (
    <View style={styles.container}>{children}</View>
  );
}

export default Container;
