import { PostCard } from '@/components/PostCard';
import { allPosts } from '../../.contentlayer/generated';
import { Grid } from '@/components/Grid';

export default function Home() {
  const posts = allPosts;

  return (
    <main className="">
      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci in
        asperiores iste ullam similique voluptates excepturi incidunt quis esse?
        Assumenda, mollitia. Nostrum illum aliquid omnis quisquam ea magnam
        sapiente voluptates?
      </div>

      <div>
        <Grid gap={10} sm={1} md={2} lg={3}>
          {posts.map((post) => (
            <PostCard key={post._id} />
          ))}
        </Grid>
      </div>
    </main>
  );
}
