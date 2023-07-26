import { useContext, useState } from 'react';
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
import { HeaderColor } from '../../context/HeaderColorProvider';

export default function Header() {
  const [openMenuProfile, setOpenMenuProfile] = useState(false);

  const { color } = useContext(HeaderColor);

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
        <NavigationItem headerColor={color}>
          <Link to="/">
            Home
          </Link>
        </NavigationItem>

        <NavigationItem headerColor={color}>
          <Link to="/pokedex">
            Pokedex
          </Link>
        </NavigationItem>

        <NavigationItem headerColor={color}>
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
