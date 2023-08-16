import { siteConfig } from '@/config';
import { Layout } from '../Layout';
import { Logo } from '../Logo';
import { HeaderNav } from '@/types';
import Link from 'next/link';

type FooterProps = {
  items: HeaderNav;
};

export const Footer = ({ items }: FooterProps) => {
  const fullYear = new Date().getFullYear();
  return (
    <Layout>
      <footer className="flex flex-col border-t border-slate-600 pb-4 pt-6">
        <div className="flex w-full justify-between pb-10">
          <div
            role="contentinfo"
            className="flex max-w-[8rem] flex-col gap-6 sm:max-w-xs"
          >
            <Logo />
            <p>{siteConfig.title}</p>
          </div>

          <div role="contentinfo">
            <p>Redes</p>
          </div>

          <div>
            <p>Sitemap</p>
            <ul>
              {items.mainNav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href}>{item.title}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div>
          <div>Alguns direitos reservados @ {fullYear}</div>
        </div>
      </footer>
    </Layout>
  );
};
