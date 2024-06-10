'use server';

import { deletePost } from '@/lib/api';
import { revalidatePath } from 'next/cache';

export async function deletePostById(postId: number) {
  await deletePost(postId);
  revalidatePath('/');
}
