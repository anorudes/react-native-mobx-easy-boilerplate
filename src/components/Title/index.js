import React, { PropTypes } from 'react';
import { Text } from 'react-native';
import styles from './styles';

function Title(props) {
  const { children } = props;

  return (
    <Text style={styles.text}>{children}</Text>
  );
}

Title.propTypes = {
  children: PropTypes.node,
};

export default Title;
