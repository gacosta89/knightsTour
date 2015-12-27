const coordStyle = {
  display: 'flex',
  justifyContent: 'center',
  padding: 15
},
cellStyle = {
  flex: '1 0 0',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  cursor: 'pointer'
};

export default React => ({coord, style}) => <div style={{...coordStyle, ...style}}>{coord.map((item, i) => <div style={cellStyle} key={i}>{item}</div>)}</div>;
