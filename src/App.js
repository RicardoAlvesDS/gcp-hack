import React from 'react';
import './App.css';
import { StateProvider } from './context/store';
import Items from './components/Items/Items';

function App() {
  return (
    <StateProvider>
      <div className="App">
        <Items />
      </div>
    </StateProvider>
  );
}

export default App;
