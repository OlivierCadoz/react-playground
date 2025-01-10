import { BrowserRouter, Routes, Route } from 'react-router';
import Home from '@pages/Home';
import Morpion from '@pages/Morpion';
import Sudoku from '@pages/Sudoku';
import Header from '@components/molecules/Header';

function App() {
  return (
    <>

      <BrowserRouter>
      <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/morpion" element={<Morpion />} />
          <Route path="/sudoku" element={<Sudoku />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
