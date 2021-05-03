import React from 'react';

import SigninPage from './pages/signin/signin';
import GlobalStyle from './styles/globals';

const App: React.FC = () => {
  return (
    <>
      <SigninPage />
      <GlobalStyle />
    </>
  )
}

export default App;