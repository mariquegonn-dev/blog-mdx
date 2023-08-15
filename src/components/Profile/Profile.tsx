import { Site } from '@/types';
import Image from 'next/image';
import * as S from './styles';

type ProfileTypes = {
  items: Site;
};

export const Profile = ({ items }: ProfileTypes) => {
  return (
    <div>
      <Image
        src="/assets/images/profile.jpg"
        alt="profile image"
        width={80}
        height={80}
        title="profile image"
        priority
        className="rounded-full"
      />

      <S.Title>{items.title}</S.Title>
      <S.Subtitle>{items.subtitle}</S.Subtitle>
    </div>
  );
};
