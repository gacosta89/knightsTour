export default ({title, rootMarkup, payload}) => {
  return `
    <!doctype html>
    <html>
      <head>
        <style>
          html {
            height: 100%;
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
