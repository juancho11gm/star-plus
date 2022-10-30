import { StarImage } from '@components/Icons/StarImage';
import { StarLink } from '@components/StarLink';
import { FooterContainer, FooterDescription } from './styles';

const Footer = () => {
  return (
    <FooterContainer>
      <StarImage />
      <FooterDescription>
        2022. Cloned by
        <StarLink
          href="https://github.com/Jaimeandres97"
          target="_blank"
          style={{ padding: '0 4px' }}
        >
          @Jaimeandres97
        </StarLink>
        and
        <StarLink
          href="https://github.com/juancho11gm"
          target="_blank"
          style={{ padding: '0 4px' }}
        >
          @juancho11gm
        </StarLink>
      </FooterDescription>
    </FooterContainer>
  );
};

export default Footer;
