import React from 'react';
import backgroundUrl from 'static/background.jpg';

const viewportStyle = {
  background: `url(${backgroundUrl}) top left`,
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center'
};

export default () => ({children}) => <div style={viewportStyle}>{children}</div>;
