import React, { PropTypes } from 'react';
import { TouchableOpacity, Text } from 'react-native';
import styles from './styles';

function Link(props) {
  const { children, onPress } = props;

  return (
    <TouchableOpacity onPress={() => onPress()}>
      <Text style={styles.text}>{children}</Text>
    </TouchableOpacity>
  );
}

Link.propTypes = {
  children: PropTypes.node,
  onPress: PropTypes.func,
};

export default Link;
