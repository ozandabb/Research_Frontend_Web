import React from 'react';
import './App.css';
import RootRouter from "./RootRouter";
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import {store, persistor} from './Redux/Store/Store';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return(
    <Provider store={store}>
      <PersistGate persistor={persistor} >
        <RootRouter />
      </PersistGate>
    </Provider>
        // <RootRouter />
  );
}


export default App;

