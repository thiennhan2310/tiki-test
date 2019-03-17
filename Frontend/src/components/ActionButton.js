import React from 'react';

import { Button } from 'react-bootstrap';

function simulateNetworkRequest() {
  return new Promise(resolve => setTimeout(resolve, 2000));
}

class ActionButton extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.handleClick = this.handleClick.bind(this);

    this.state = {
      isLoading: false,
    };
  }

  handleClick() {
    this.setState({ isLoading: true }, () => {
      this.props.onClick().then(() => {
        this.setState({ isLoading: false });
      });
    });
  }

  render() {
    const { isLoading } = this.state;

    return (
      <Button
        variant={this.props.type || 'variant'}
        disabled={isLoading}
        onClick={!isLoading ? this.handleClick : null}
      >
        {isLoading ? 'Loading…' : this.props.title}
      </Button>
    );
  }
}

export default ActionButton;