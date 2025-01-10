import { BrowserRouter } from 'react-router'

import Header from '@components/molecules/Header';
import Routes from '@routes';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
          
        <Routes />
      </BrowserRouter>
    </>
  );
}

export default App;
