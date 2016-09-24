import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';
import Container from '@components/Container';
import Title from '@components/Title';
import Link from '@components/Link';

class LauchContainer extends Component {
  render() {
    return (
      <Container>
        <Title>Hello there 😃 !</Title>
        <Link onPress={Actions.counter}>Go to counter</Link>
      </Container>
    );
  }
}

export default LauchContainer;
