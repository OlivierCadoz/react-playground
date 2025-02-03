import { NavLink } from 'react-router';
import { isActive } from '@utils/header';

import { navLinks } from '@constants/header';
import { NavLinkModel } from "@models/header.model";

import '@/components/molecules/Header.scss'

export default function Header() {
  return (
    <header className="header">
      <nav className="header__nav">
        <ul className="header__nav-list">
          {navLinks.map((link: NavLinkModel) => (
            <li key={link.label}>
              <NavLink to={link.path} className={isActive}>
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
