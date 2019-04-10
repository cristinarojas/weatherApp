// Environment
const isProduction = process.env.NODE_ENV === 'production';

export default function html({ title }) {
  let path = '/';
  let link = '';

  if (isProduction) {
    path = '/app/';
    link = `<link rel="stylesheet" href="${path}css/main.css" />`;
  }

  return `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8"> <title>${title}</title> ${link}
        <link href="https://fonts.googleapis.com/css?family=Quicksand|Roboto" rel="stylesheet">
      </head>

      <body>
        <div id="root"></div>

        <script>
          // Detecting the user device
          const isMobile = /iPhone|Android/i.test(navigator.userAgent);

          // Creating our initialState
          const initialState = {
            device: {
              isMobile
            }
          };

          // Saving our initialState to the window object
          window.initialState = initialState;
        </script>
        <script src="${path}vendor.js"></script>
        <script src="${path}main.js"></script>
      </body>
    </html>
  `;
}
