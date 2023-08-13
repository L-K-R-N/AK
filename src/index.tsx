
import ReactDOM from 'react-dom/client';

import App from './App';
import { Provider } from 'react-redux';
import { setupStore } from './store';
import { createGlobalStyle, useTheme } from 'styled-components';
import {ThemeProvider} from 'styled-components';
import { colors, mainColor } from './styles/colors';
import { useState } from 'react';
import './styles/index.css'
import persistStore from 'redux-persist/es/persistStore';
import { PersistGate } from 'redux-persist/integration/react';



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


body {
  width: 100vw;
  height: 100%;
  font-family: var(--family);
  font-weight: var(--fw-medium);
  background: var(--bg-color);
}


img {
  max-width: 100%;
  max-height: 100%;
}
`




const store = setupStore()

export const persistor = persistStore(store)
root.render(

    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <GlobalStyles/>
          <App />
        </PersistGate>
    </Provider>

);


