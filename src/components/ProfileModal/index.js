import PropTypes from 'prop-types';

import ReactPortal from '../ReactPortal';
import { ApresentationContainer, Container, LinksContainer } from './styles';

import closeMenu from '../../assets/images/icons/close-menu.svg';
import profile from '../../assets/images/ali.jpg';
import mailIcon from '../../assets/images/icons/envelope.svg';
import linkedinIcon from '../../assets/images/icons/linkedin.svg';
import githubIcon from '../../assets/images/icons/github.svg';

export default function ProfileModal({ onClick }) {
  return (
    <ReactPortal containerId="profile-modal">
      <Container>
        <button type="button" onClick={onClick}>
          <img src={closeMenu} alt="Close menu" />
        </button>
        <ApresentationContainer>
          <img src={profile} alt="Author" />
          <h3>Ali Haidar Pucci Sidani</h3>
          <p>Front-End Developer</p>
          <p>
            This is a non-profit project created
            to practice concepts learned about programming.
          </p>
        </ApresentationContainer>
        <LinksContainer>
          <a href="mailto:ali.hps@hotmail.com">
            <img src={mailIcon} alt="Mail" />
          </a>
          <a href="https://www.linkedin.com/in/ali-haidar-pucci" target="_blank" rel="noreferrer">
            <img src={linkedinIcon} alt="LinkedIn" />
          </a>
          <a href="https://www.github.com/alihpss" target="_blank" rel="noreferrer">
            <img src={githubIcon} alt="GitHub" />
          </a>
        </LinksContainer>
      </Container>
    </ReactPortal>
  );
}

ProfileModal.propTypes = {
  onClick: PropTypes.func.isRequired,
};
