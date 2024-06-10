'use server';

import { deletePostById } from '@/lib/api';
import { revalidatePath } from 'next/cache';

export async function deletePost(postId: number) {
  await deletePostById(postId);
  revalidatePath('/');
}
