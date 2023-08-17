import { HeaderNav } from '@/types';
import * as S from './styles';
import { List, ListItem } from '../List';

type SocialMediaProps = {
  items: HeaderNav;
};

export const SocialMedia = ({ items }: SocialMediaProps) => {
  return (
    <List className="flex-col">
      {items.mainNav.map((item) => (
        <ListItem key={item.title}>
          <S.Link href={item.href}>
            {item?.icon}
            <S.Text>{item.title}</S.Text>
          </S.Link>
        </ListItem>
      ))}
    </List>
  );
};
