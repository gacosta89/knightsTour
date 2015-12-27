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
  margin: 5
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
  hiddenStyle = {
    display: 'none'
  },
  mapType = {
    info: infoStyle,
    error: errorStyle,
    success: successStyle,
    hidden: hiddenStyle
  };

export default React => ({type, children}) =>
  <div style={mapType[type]}>
    <span style={spanStyle}>
      {children}
    </span>
  </div>;
