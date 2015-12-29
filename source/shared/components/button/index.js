import React from 'react';
import { Button } from 'react-bootstrap';

export default () => React.createClass({
  displayName: 'KTButton',
  getInitialState () {
    return {
      hovered: false
    };
  },
  onMouseOver () {
    this.setState({hovered: true});
  },
  onMouseOut () {
    this.setState({hovered: false});
  },
  render () {
    const { children, style, styleHovered, ...props } = this.props;
    return (
      <Button { ...props }
        style={this.state.hovered ? typeof styleHovered !== 'undefined' ? styleHovered : style : style}
        onMouseOver={this.onMouseOver}
        onMouseOut={this.onMouseOut}>
        {children}
      </Button>
    );
  }
});
