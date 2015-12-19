import backgroundUrl from 'static/background.jpg';

const viewportStyle = {
  background: `url(${backgroundUrl}) top left`,
  flex: 1,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
};

export default React => ({children}) => <div style={viewportStyle}>{children}</div>;
