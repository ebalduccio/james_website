'use client';

import {
  TableHead,
  TableRow,
  TableHeader,
  TableCell,
  TableBody,
  Table
} from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { Post } from '@/lib/api';
import { deletePost } from '@/lib/api';
import { useRouter } from 'next/navigation';

export function PostsTable({
  posts,
  offset
}: {
  posts: Post[];
  offset: number | null;
}) {
  const router = useRouter();

  function onClick() {
    router.replace(`/?offset=${offset}`);
  }

  return (
    <>
      <form className="border shadow-sm rounded-lg">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="max-w-[150px]">Id</TableHead>
              <TableHead className="hidden md:table-cell">Title</TableHead>
              <TableHead className="hidden md:table-cell">Content</TableHead>
              <TableHead></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {posts.map((post) => (
              <PostRow key={post.id} post={post} />
            ))}
          </TableBody>
        </Table>
      </form>
      {offset !== null && (
        <Button
          className="mt-4 w-40"
          variant="secondary"
          onClick={() => onClick()}
        >
          Next Page
        </Button>
      )}
    </>
  );
}

function PostRow({ post }: { post: Post }) {
  const postId = post.id;
  const deletePostWithId = async () => {
    await deletePost(postId);
    window.location.reload(); // Reload the page to reflect the changes
  };

  return (
    <TableRow>
      <TableCell className="font-medium">{post.id}</TableCell>
      <TableCell className="hidden md:table-cell">{post.title}</TableCell>
      <TableCell>{post.content}</TableCell>
      <TableCell>
        <Button
          className="w-full"
          size="sm"
          variant="outline"
          onClick={deletePostWithId}
        >
          Delete
        </Button>
      </TableCell>
    </TableRow>
  );
}
