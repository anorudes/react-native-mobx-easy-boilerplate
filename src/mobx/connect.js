import React, { Component } from 'react';
import { counter } from '@stores';

function connect(DecoratedComponent) {
  class Connect extends Component {
    render() {
      return (
        <DecoratedComponent
          counter={counter}
          {...this.props}
        />
      );
    }
  }

  return Connect;
}

export default connect;
