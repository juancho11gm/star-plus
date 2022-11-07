import { loginWithGmail, logout } from '@firebase/client';
import GmailIcon from '@components/Icons/Gmail';
import { useHeaderVisible } from '@hooks/useHeaderVisible';
import { useMediaQuery } from '@hooks/useMediaQuery';
import { useUser } from '@hooks/useUser';
import { Button, ButtonProps } from '@components/Button';
import { StarImage } from '@components/Icons/StarImage';
import { Spinner } from '@components/Spinner';
import { device } from '@styles/theme';
import { NavbarContent } from './styles';

const Header = () => {
  const { isHeaderVisible } = useHeaderVisible();
  const { user, isLoading } = useUser();
  const isTablet = useMediaQuery(device.tablet);

  const handleLogin = () => {
    loginWithGmail().catch((err) => console.log(err));
  };

  const handleLogout = () => {
    logout().catch((err) => console.log(err));
  };

  const isLoggedIn = Object.keys(user).length !== 0;

  const navbarButtonProps: ButtonProps = {
    onClick: isLoggedIn ? handleLogout : handleLogin,
    size: isTablet ? 'large' : 'medium',
    children: isLoggedIn ? (
      'Cerrar Sesión'
    ) : (
      <>
        Iniciar Sesión <GmailIcon style={{ marginLeft: '4px' }} />
      </>
    ),
  };

  return (
    <header>
      <NavbarContent>
        <StarImage />
        {isLoggedIn && !isLoading && (
          <Button
            styles="secondary"
            onClick={() => alert(user.email)}
            size={isTablet ? 'large' : 'medium'}
            style={{ opacity: isHeaderVisible ? 1 : 0 }}
          >
            {user.displayName}
          </Button>
        )}
        {isLoading ? <Spinner /> : <Button {...navbarButtonProps} />}
      </NavbarContent>
    </header>
  );
};

export { Header };
