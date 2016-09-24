import React, { PropTypes } from 'react';
import { TouchableOpacity, Text } from 'react-native';
import styles from './styles';

function Button(props) {
  const { children, onPress } = props;
  return (
    <TouchableOpacity onPress={() => onPress()} style={styles.container}>
      <Text style={styles.text}>{children}</Text>
    </TouchableOpacity>
  );
}

Button.propTypes = {
  onPress: PropTypes.func,
  children: PropTypes.node,
};

Button.defaultProps = {
  onPress: () => true,
};

export default Button;
