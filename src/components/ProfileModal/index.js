import PropTypes from 'prop-types';

import ReactPortal from '../ReactPortal';
import { Container } from './styles';

import closeMenu from '../../assets/images/icons/close-menu.svg';

export default function ProfileModal({ onClick }) {
  return (
    <ReactPortal containerId="profile-modal">
      <Container>
        <button type="button" onClick={onClick}>
          <img src={closeMenu} alt="Close menu" />
        </button>
        profile
      </Container>
    </ReactPortal>
  );
}

ProfileModal.propTypes = {
  onClick: PropTypes.func.isRequired,
};
