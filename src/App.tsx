import React from 'react';
import { DoorsList } from './components/products/doors/DoorsList';
import { Provider } from './contexts/ProductContext';

function App() {
  return (
    <div>
      <Provider>
        <DoorsList />
      </Provider>
    </div>
  );
}

export default App;
