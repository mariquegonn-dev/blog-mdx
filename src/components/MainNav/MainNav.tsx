import { HeaderNav } from '@/types';
import * as S from './styles';
import Link from 'next/link';
import { ToggleButton } from './components';
import { useMainNav } from './components/hooks';

type MainNavProps = {
  items: HeaderNav;
};

export const MainNav = ({ items }: MainNavProps) => {
  const { isOpenMenu, handleToggleMenu } = useMainNav();

  return (
    <>
      <S.Nav>
        <S.List>
          {items.mainNav.map((item) => (
            <S.ListItem key={item.title}>
              <Link href={item.href}>{item.title}</Link>
            </S.ListItem>
          ))}
        </S.List>
      </S.Nav>

      <S.Content>
        <ToggleButton
          isOpenMenu={isOpenMenu}
          handleToggleMenu={handleToggleMenu}
        />
      </S.Content>
    </>
  );
};
