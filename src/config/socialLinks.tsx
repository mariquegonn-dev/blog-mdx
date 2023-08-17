import { GithubIcon, YoutubeIcon, LinkedinIcon } from '@/components/Icons';
import { HeaderNav } from '@/types';

export const socialLinkConfig: HeaderNav = {
  mainNav: [
    {
      title: 'Linkedin',
      href: 'https://www.linkedin.com/in/mariquegonn-dev/',
      icon: <LinkedinIcon size={28} />
    },
    {
      title: 'Youtube',
      href: 'https://www.youtube.com/channel/UCxCtA-Varpvr7mnnOHdW1Aw',
      icon: <YoutubeIcon size={28} />
    },
    {
      title: 'Github',
      href: 'https://github.com/mariquegonn-dev',
      icon: <GithubIcon size={28} />
    }
  ]
};
