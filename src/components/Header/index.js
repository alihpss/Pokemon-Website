import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Container,
  LogoContainer,
  NavigationContainer,
  NavigationItem,
} from './styles';

import logo from '../../assets/images/pokemon-logo.svg';
import grid from '../../assets/images/icons/grid-menu.svg';
import ProfileModal from '../ProfileModal';

export default function Header() {
  const [openMenuProfile, setOpenMenuProfile] = useState(false);

  function handleOpenMenuProfile() {
    setOpenMenuProfile(true);
  }

  function handleCloseMenuProfile() {
    setOpenMenuProfile(false);
  }

  return (
    <Container>
      <LogoContainer>
        <img src={logo} alt="Pokemon logo" />
      </LogoContainer>

      <NavigationContainer>
        <NavigationItem>
          <Link to="/">
            Home
          </Link>
        </NavigationItem>

        <NavigationItem>
          <Link to="/pokedex">
            Pokedex
          </Link>
        </NavigationItem>

        <NavigationItem>
          <button type="button" onClick={handleOpenMenuProfile}>
            <img src={grid} alt="menu" />
          </button>
        </NavigationItem>
      </NavigationContainer>

      {openMenuProfile && (
      <ProfileModal onClick={handleCloseMenuProfile} />
      )}

    </Container>
  );
}
