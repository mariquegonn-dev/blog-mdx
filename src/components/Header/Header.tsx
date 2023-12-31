import * as S from './styles';
import { Logo } from '../Logo';

type HeaderProps = {
  children?: React.ReactNode;
};

export const Header = ({ children }: HeaderProps) => {
  return (
    <S.Container>
      <S.Content>
        <Logo />

        {children}
      </S.Content>
    </S.Container>
  );
};

export default Header;
