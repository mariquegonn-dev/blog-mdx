import * as S from './styles';
import { LiHTMLAttributes } from 'react';

type ListItemProps = LiHTMLAttributes<HTMLLIElement> & {
  children: React.ReactNode;
};

export const ListItem = ({ children, ...rest }: ListItemProps) => {
  return (
    <S.Container {...rest} className="">
      {children}
    </S.Container>
  );
};
