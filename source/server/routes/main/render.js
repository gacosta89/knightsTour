import React from 'react';
import reactDom from 'react-dom/server';

const render = reactDom.renderToStaticMarkup;


const createDOM = () => {
  return render(
    <div></div>
  );
};

export default createDOM;
