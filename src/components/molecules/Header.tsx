import { NavLink } from 'react-router';
import { isActive } from '@utils/header';

import { navLinks } from '@constants/header';
import { NavLinkModel } from "@models/header.model";

export default function Header() {
  return (
    <header>
      <nav>
        <ul>
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
