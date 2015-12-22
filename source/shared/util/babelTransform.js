import { transform } from 'babel-core';

export default code => {
  try {
    return {
      ...transform(code, {
        presets: [
          'es2015',
          'stage-2'
        ]})
    };
  } catch ({message: error}) {
    return {
      error
    };
  }
};
