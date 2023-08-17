import { siteConfig } from '@/config';
import { Layout } from '../Layout';
import { Logo } from '../Logo';
import { HeaderNav } from '@/types';
import Link from 'next/link';
import * as S from './styles';
import { List, ListItem } from '../List';
import { SocialMedia } from '../SocialMedia';
import { socialLinkConfig } from '@/config/socialLinks';

type FooterProps = {
  items: HeaderNav;
};

export const Footer = ({ items }: FooterProps) => {
  const fullYear = new Date().getFullYear();
  return (
    <Layout>
      <S.Container>
        <S.Content>
          <S.Section role="contentinfo" className="">
            <Logo />
            <S.Title className="">{siteConfig.title}</S.Title>
          </S.Section>

          <S.Section role="contentinfo">
            <S.Title>Redes</S.Title>

            <SocialMedia items={socialLinkConfig} />
          </S.Section>

          <S.Section role="contentinfo">
            <S.Title>Sitemap</S.Title>
            <List className="flex-col">
              {items.mainNav.map((item) => (
                <ListItem key={item.href}>
                  <Link href={item.href}>{item.title}</Link>
                </ListItem>
              ))}
            </List>
          </S.Section>
        </S.Content>
        <S.CopyrightContainer>
          <S.Copyright>Alguns direitos reservados @ {fullYear}</S.Copyright>
        </S.CopyrightContainer>
      </S.Container>
    </Layout>
  );
};
