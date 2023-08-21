import * as S from "./styles"
import Image from 'next/image';
import Link from 'next/link';
import { Tag } from '../Tag';
import { BlogPost } from '@/types';
import { formatDate } from "@/functions";

type PostCardProps = {
  post: BlogPost;
};

export const PostCard = ({ post }: PostCardProps) => {
  const {  frontmatter, readingTime, slug } = post;
  const { title, description, date, image, tags } = frontmatter;

  const formattedDate = formatDate(date);

  return (
    <>
      <Link className="hover:border-link w-full rounded-lg border-2 p-3 border-transparent transition-colors duration-300" 
      href={slug}>
        <S.ImageContainer>
          <Image
            src={image}
            alt="title"
            fill
            className="rounded-xl object-cover object-center"
            priority
          />
        </S.ImageContainer>

        <S.Content>
          <S.TagsContainer>
            {tags?.map((tag) => (
              <Tag key={tag}>{tag}</Tag>
            ))}
          </S.TagsContainer>

          <S.Time>
            {formattedDate} • {readingTime} minutos de leitura
          </S.Time>

          <S.Title>
            {title}
          </S.Title>

          <S.Description>{description}</S.Description>
        </S.Content>
      </Link>
    </>
  );
};
