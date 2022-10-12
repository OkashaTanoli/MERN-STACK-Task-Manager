import React, { useState } from 'react';
import './App.css';

import ContextReducer from './store/context';
import Router from './router';

function App() {

  return (
      <ContextReducer >
        <Router />
      </ContextReducer>
  );
}

export default App;
