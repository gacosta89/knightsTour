export default ({title, rootMarkup, payload}) => {
  return `
    <!doctype html>
    <html>
      <head>
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css" integrity="sha384-1q8mTJOASx8j1Au+a5WDVnPi2lkFfwwEAa8hDDdjZlpLegxhjVME1fgjWPGmkzs7" crossorigin="anonymous">
        <style>
          @font-face {
            font-family: knightsTourFont;
            src: url('/static/assets/MorrisRoman-Black.ttf');
          }
          html {
            height: 100%;
          }
          body {
            height: 100%;
            display: flex;
            align-items: strecth;
            margin: 0;
            font-family: knightsTourFont;
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
