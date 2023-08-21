import PropTypes from 'prop-types';

import ReactPortal from '../ReactPortal';
import { ApresentationContainer, Container, LinksContainer } from './styles';

import closeMenu from '../../assets/images/icons/close-menu.svg';
import mailIcon from '../../assets/images/icons/envelope.svg';
import linkedinIcon from '../../assets/images/icons/linkedin.svg';
import githubIcon from '../../assets/images/icons/github.svg';
import useAnimatedUnmount from '../../Hooks/UseAnimationUnmount';

export default function ProfileModal({ onClick, visible }) {
  const { shouldRender, animatedElementRef } = useAnimatedUnmount(visible);

  if (!shouldRender) {
    return null;
  }

  let container = document.getElementById('modal-root');

  if (!container) {
    container = document.createElement('div');
    container.setAttribute('id', 'modal-root');
    document.body.appendChild(container);
  }

  return (
    <ReactPortal containerId="modal-root">
      <Container isLeaving={!visible} ref={animatedElementRef}>
        <button type="button" onClick={onClick}>
          <img src={closeMenu} alt="Close menu" />
        </button>
        <ApresentationContainer>
          <img src="/images/ali.png" alt="Author" />
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
  visible: PropTypes.bool.isRequired,
};
