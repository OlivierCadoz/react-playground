import { BrowserRouter } from 'react-router';

import Header from '@components/molecules/Header';
import Routes from '@routes/index';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />

        <main>
          <Routes />
        </main>
      </BrowserRouter>
    </>
  );
}

export default App;
