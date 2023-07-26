import copyright from '../../assets/images/icons/c-circle.svg';
import mailIcon from '../../assets/images/icons/envelope.svg';
import linkedinIcon from '../../assets/images/icons/linkedin.svg';
import githubIcon from '../../assets/images/icons/github.svg';

import {
  Container, ContentContainer, CopyrightContainer, LinksContainer,
} from './styles';

export default function Footer() {
  return (
    <Container>
      <ContentContainer>
        <CopyrightContainer>
          <img src={copyright} alt="Copyright" />
          <div className="textCopy">
            <p>
              Direitos de imagem para Nintendo
            </p>
            <p>
              Dados pegos da API - pokeapi.co
            </p>
          </div>
        </CopyrightContainer>

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

      </ContentContainer>
    </Container>
  );
}
