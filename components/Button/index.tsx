import { ButtonContainer } from './styles';

export interface ButtonProps {
  size?: 'small' | 'medium' | 'large';
  styles?: 'primary' | 'secondary' | 'tertiary';
  children?: React.ReactNode;
  disabled?: boolean;
  onClick?: () => void;
  style?: React.CSSProperties;
}

const Button = (props: ButtonProps) => {
  const {
    styles = 'primary',
    children,
    disabled = false,
    size = 'medium',
    onClick,
    style,
  } = props;
  return (
    <ButtonContainer
      styles={styles}
      disabled={disabled}
      size={size}
      onClick={onClick}
      style={style}
    >
      {children}
    </ButtonContainer>
  );
};

export { Button };
