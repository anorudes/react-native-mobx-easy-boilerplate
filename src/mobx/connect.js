import React, { Component, PropTypes } from 'react';
import { counter } from '@stores';

function Connect(DecoratedComponent) {
  class Connect extends Component {
    render() {
      return (
        <DecoratedComponent
          counter={counter}
          {...this.props}
        />
      );
    }
  };

  return Connect;
};

export default Connect;
