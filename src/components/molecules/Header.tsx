import { NavLink } from 'react-router';
import { isActive } from '@utils/header';

export default function Header() {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <NavLink to="/" className={isActive}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/morpion" className={isActive}>
              Morpion
            </NavLink>
          </li>
          <li>
            <NavLink to="/sudoku" className={isActive}>
              Sudoku
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
