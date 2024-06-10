import { getPosts } from '@/lib/api';
import { PostsTable } from './posts-table';
import { Search } from './search';

export default async function IndexPage({
  searchParams
}: {
  searchParams: { q: string; offset: string };
}) {
  const search = searchParams.q ?? '';
  const posts = await getPosts();
  const filteredPosts = search
    ? posts.filter(post => post.title.includes(search) || post.content.includes(search))
    : posts;

  const offset = searchParams.offset ? parseInt(searchParams.offset, 10) : 0;
  const paginatedPosts = filteredPosts.slice(offset, offset + 20);
  const newOffset = paginatedPosts.length >= 20 ? offset + 20 : null;

  return (
    <main className="flex flex-1 flex-col p-4 md:p-6">
      <div className="flex items-center mb-8">
        <h1 className="font-semibold text-lg md:text-2xl">Posts</h1>
      </div>
      <div className="w-full mb-4">
        <Search value={searchParams.q} />
      </div>
      <PostsTable posts={paginatedPosts} offset={newOffset} />
    </main>
  );
}
