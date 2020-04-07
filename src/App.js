import React from 'react';

import Panel from './components/Panel/Panel';
import Panels from './containers/Panel';

function App() {
  return (
    <div className="wrapper">
      <div className="container">
        <div className="mainblock">
          <Panels/>
        </div>
      </div>
    </div>
  );
}

export default App;
