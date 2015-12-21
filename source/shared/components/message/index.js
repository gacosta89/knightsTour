const spanStyle = {
  padding: 5
},
messageStyle = {
  border: '3px solid',
  fontSize: 35,
  display: 'flex',
  borderRadius: 4
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
  mapType = {
    info: infoStyle,
    error: errorStyle,
    success: successStyle
  };

export default React => ({type, children}) =>
  <div style={mapType[type]}>
    <span style={spanStyle}>
      {children}
    </span>
  </div>;
