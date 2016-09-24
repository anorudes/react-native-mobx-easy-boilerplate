import React, { Component, PropTypes } from 'react';
import { observer } from 'mobx-react/native';
import connect from '@mobx/connect';
import Container from '@components/Container';
import Title from '@components/Title';
import Counter from '@components/Counter';

class CounterContainer extends Component {
  render() {
    const { counter } = this.props;

    return (
      <Container>
        <Title>Counter</Title>
        <Counter
          value={counter.value}
          decrement={() => counter.decrement()}
          increment={() => counter.increment()}
        />
      </Container>
    );
  }
}

CounterContainer.propTypes = {
  counter: PropTypes.object,
};

export default connect(observer(CounterContainer));
