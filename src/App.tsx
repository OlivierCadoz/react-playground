import { BrowserRouter } from 'react-router';
import '@/App.scss'

import Header from '@components/molecules/Header';
import Routes from '@routes/index';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />

        <main className='main-content'>
          <Routes />
        </main>
      </BrowserRouter>
    </>
  );
}

export default App;
