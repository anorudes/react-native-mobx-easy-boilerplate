import React, { PropTypes } from 'react';
import { View } from 'react-native';
import styles from './styles';

function Container(props) {
  const { children } = props;

  return (
    <View style={styles.container}>{children}</View>
  );
}

Container.propTypes = {
  children: PropTypes.array,
};

export default Container;
