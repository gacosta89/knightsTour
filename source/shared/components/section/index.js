const sectionStyle = {
  flex: 1,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
};

export default React => ({children, style}) => <section style={{...sectionStyle, ...style}}>{children}</section>;
