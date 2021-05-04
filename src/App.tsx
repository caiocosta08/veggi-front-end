import React from 'react';
import { BrowserRouter} from 'react-router-dom';
// import { Provider } from 'react-redux';
// import { PersistGate } from 'redux-persist/integration/react';

import Routes from './routes';

// import {store, persistor } from './store'

import './assets/styles/global.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      {/* <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>        */}
          <BrowserRouter>
            <Routes /> 
          </BrowserRouter>
        {/* </PersistGate>
      </Provider> */}
      </header>
    </div>
  );
}

export default App;
