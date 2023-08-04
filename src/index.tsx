
import ReactDOM from 'react-dom/client';

import App from './App';
import { Provider } from 'react-redux';
import { setupStore } from './store';
import { createGlobalStyle } from 'styled-components';
import {ThemeProvider} from 'styled-components';
import { colors, mainColor } from './styles/colors';
// import theme from 'styled-theming'
import { useState } from 'react';
import './styles/index.css'
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);





const GlobalStyles = createGlobalStyle`


@import url('https://fonts.googleapis.com/css2?family=Exo+2:wght@200;300;400;500;700;600;800;900&display=swap');

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

:root {
  /* typography */
  --family: 'Exo 2', sans-serif;
  --fs-xs: 12px;
  --fs-small: 16px;
  --fs-medium: 20px;
  --fs-large: 24px;
  --fs-xl: 28px;
  --fs-xxl: 32px; 

  --fw-ultra-light: 200;
  --fw-light: 300;
  --fw-regular: 400;
  --fw-medium: 500;
  --fw-demi-bold: 600;
  --fw-bold: 700;
  --fw-ultra-bold: 800;
  --fw-black: 900;
}

body {
  width: 100vw;
  height: 100%;
  font-family: 'Exo 2';
  font-weight: 100;
  background: var(--bg-color)
}

body[data-theme='light'] {
  --bg-color: #ffffff;
  --second-color: #e6e6e6;
  --green-color: #8fdb51;
  --yellow-color: #dbbf51;
  --text-color: #111111;
  --text-color2: #363636;

  --shadow: 0px 10px 17px 0px rgba(86, 86, 86, 0.2);
}

body[data-theme='dark'] {
  --bg-color: #111111;
  --second-color: #303030;
  --green-color: #8fdb51;
  --yellow-color: #dbbf51;
  --text-color: #ffffff;
  --text-color2: #888888;

  --shadow: 0px 13px 25px 0px rgba(0, 0, 0, 0.3);
}

img {
  max-width: 100%;
  max-height: 100%;
}
`



const store = setupStore()
root.render(

    <Provider store={store}>
        <GlobalStyles/>
        <App />
    </Provider>

);


