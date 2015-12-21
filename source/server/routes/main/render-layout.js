export default ({title, rootMarkup, payload}) => {
  return `
    <!doctype html>
    <html>
      <head>
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
        <style>
          @font-face {
            font-family: knightsTourFont;
            src: url('/static/assets/MorrisRoman-Black.ttf');
          }
          html {
            height: 100%;
            font-family: knightsTourFont;
          }
          body {
            height: 100%;
            display: flex;
            align-items: strecth;
            margin: 0;
          }
          #root {
            flex: 1;
            display: flex;
            align-items: strecth;
          }
        </style>
        <title>${ title }</title>
      </head>
      <body>
        <div id='root'>${ rootMarkup }</div>
        <script>${ payload }</script>
        <script src="/static/index.js"></script>
      </body>
    </html>
  `;
};
