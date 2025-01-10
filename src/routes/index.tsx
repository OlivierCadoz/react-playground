import { Routes, Route } from 'react-router';
import Home from '@pages/Home';
import Morpion from '@pages/Morpion';
import Sudoku from '@pages/Sudoku';

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/morpion" element={<Morpion />} />
      <Route path="/sudoku" element={<Sudoku />} />
    </Routes>
  )
}