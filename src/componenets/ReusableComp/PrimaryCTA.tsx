import { StyledButton } from './Components.style';
import { ButtonProps } from '../../types';

const PrimaryCTA = ({ onClick, children }: ButtonProps) => {
  return <StyledButton onClick={onClick}>{children}</StyledButton>;
};

export default PrimaryCTA;
