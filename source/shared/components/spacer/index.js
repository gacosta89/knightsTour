const spacerStyle = {
  flex: 1,
  background: 'transparent'
};

export default React => ({style}) => <div style={{...spacerStyle, ...style}}></div>;
