'use client';

import { HeaderNav } from '@/types';
import * as S from './styles';
import Link from 'next/link';
import { ToggleButton } from './components';
import { useMainNav } from './components/hooks';
import { List, ListItem } from '../List';

type MainNavProps = {
  items: HeaderNav;
};

export const MainNav = ({ items }: MainNavProps) => {
  const { isOpenMenu, handleToggleMenu } = useMainNav();

  return (
    <>
      <S.Nav>
        <List>
          {items.mainNav.map((item) => (
            <ListItem key={item.title}>
              <Link href={item.href}>{item.title}</Link>
            </ListItem>
          ))}
        </List>
      </S.Nav>

      <S.Content>
        <ToggleButton
          isOpenMenu={isOpenMenu}
          handleToggleMenu={handleToggleMenu}
        />
      </S.Content>

      {isOpenMenu && (
        <S.ContainerMobile>
          <S.NavMobile>
            <S.ListMobile>
              {items.mainNav.map((item) => (
                <S.ListItemMobile key={item.title}>
                  <Link href={item.href}>{item.title}</Link>
                </S.ListItemMobile>
              ))}
            </S.ListMobile>
          </S.NavMobile>
        </S.ContainerMobile>
      )}
    </>
  );
};
