import React from 'react';

const spanStyle = {
  padding: 5
},
messageStyle = {
  border: '3px solid',
  fontSize: 35,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: 4,
  margin: 5,
  cursor: 'default'
},
  successStyle = {
    ...messageStyle,
    color: 'blue',
    borderColor: 'blue'
  },
  errorStyle = {
    ...messageStyle,
    color: 'red',
    borderColor: 'red'
  },
  infoStyle = {
    ...messageStyle,
    color: 'white',
    borderColor: 'white'
  },
  infoDarkStyle = {
    ...messageStyle,
    color: 'rgb(51, 51, 51)',
    borderColor: 'rgb(51, 51, 51)'
  },
  hiddenStyle = {
    display: 'none'
  },
  mapType = {
    info: infoStyle,
    infoDark: infoDarkStyle,
    error: errorStyle,
    success: successStyle,
    hidden: hiddenStyle
  };

export default () => ({type, children}) =>
  <div style={mapType[type]}>
    <span style={spanStyle}>
      {children}
    </span>
  </div>;
