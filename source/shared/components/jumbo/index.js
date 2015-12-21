const jumboStyle = {
  backgroundColor: 'white',
  borderRadius: '6',
  boxShadow: '0px 0px 5px 2px #444',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'stretch',
  margin: 20
};
export default React => ({children, style}) => <div style={{...jumboStyle, ...style}}>{children}</div>;
