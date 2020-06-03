import React from 'react';
import GlobalStyle from './Global-style'

import Routes from './Routes'

const App: React.FC = () => {
  return (
    <div>
      <GlobalStyle />
      <Routes />
    </div>
  );
}

export default App;
