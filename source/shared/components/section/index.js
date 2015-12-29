import React from 'react';

const sectionStyle = {
  flex: 1,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
};

export default () => ({children, style}) => <section style={{...sectionStyle, ...style}}>{children}</section>;
