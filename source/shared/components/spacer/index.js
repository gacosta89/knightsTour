import React from 'react';

const spacerStyle = {
  flex: 1,
  background: 'transparent'
};

export default () => ({style}) => <div style={{...spacerStyle, ...style}}></div>;
