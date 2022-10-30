import { useRouter } from 'next/router';
import { StarLinkContainer } from './styles';

interface StarLinkProps {
  href?: string;
  target?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
}

const StarLink = (props: StarLinkProps) => {
  const { href = '/', target = '', style, children } = props;
  const router = useRouter();

  /**
   * Redirect for styling anchors.
   * https://www.peterlunch.com/blog/nextjs-active-link-styling
   */
  const handleRedirect = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault();
    href && router.push(href);
  };

  return (
    <StarLinkContainer target={target} onClick={handleRedirect} style={style}>
      {children}
    </StarLinkContainer>
  );
};

export { StarLink };
