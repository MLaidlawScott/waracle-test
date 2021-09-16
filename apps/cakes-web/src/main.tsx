import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import { ChakraProvider, theme } from '@waracle-test/web-component-library';

import App from './app/app';
import { store } from './store/store';

ReactDOM.render(
  <StrictMode>
    <Provider store={store}>
      <ChakraProvider theme={theme}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ChakraProvider>
    </Provider>
  </StrictMode>,
  document.getElementById('root')
);
