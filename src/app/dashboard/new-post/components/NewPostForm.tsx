'use client';

import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { postSchema, PostSchema } from '../../../schemas/postSchema';
import { createPost } from '@/lib/api';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';

const NewPostForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<PostSchema>({
    resolver: zodResolver(postSchema),
  });

  const onSubmit = async (data: PostSchema) => {
    try {
      await createPost(data);
      alert('Post created successfully');
    } catch (error) {
      console.error('Error creating post:', error);
      alert('Failed to create post');
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className='flex flex-col gap-10 pt-10'>
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label htmlFor="title">Title</Label>
          <Input id="content" placeholder="Title" {...register('title')} />
          {errors.title && <p className='text-red-700 text-ms pl-2 font-semibold'>{errors.title.message}</p>}
        </div>

        <div className="grid w-full gap-2">
          <Label htmlFor="content">Text</Label>
          <Textarea placeholder="Type some rich text here..." className='w-[30rem] h-[20rem]' {...register('content')} />
          {errors.content && <p className='text-red-700 text-ms pl-2 font-semibold'>{errors.content.message}</p>}
          <Button>Publish</Button>
        </div>
      </div >
    </form>
  );
};

export default NewPostForm;
