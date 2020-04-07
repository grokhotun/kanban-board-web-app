import React from 'react';

import Panel from './components/Panel/Panel';


function App() {
  return (
    <div className="wrapper">
      <div className="container">
        <div className="mainblock">
          <Panel items={
            [
              { text: "Купить молокоКупить молокоКупить молокоКупить молоко" },
              { text: "Купить хлеб" },
              { text: "Купить чипсы" },
            ]
          }>
          </Panel>
          <Panel items={null}>
          </Panel>
        </div>
      </div>
    </div>
  );
}

export default App;
