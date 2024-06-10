'use client';

import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { postSchema, PostSchema } from '../../../schemas/postSchema';
import { createPost } from '@/lib/api';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import dynamic from 'next/dynamic';
import { ContentState, convertToRaw } from 'draft-js';
import htmlToDraft from 'html-to-draftjs';
import 'react-quill/dist/quill.snow.css';

const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });

const NewPostForm: React.FC = () => {
  const { register, handleSubmit, setValue, watch, formState: { errors } } = useForm<PostSchema>({
    resolver: zodResolver(postSchema),
  });

  const content = watch('content');

  useEffect(() => {
    register('content');
  }, [register]);

  const onSubmit = async (data: PostSchema) => {
    try {
      const contentBlock = htmlToDraft(content);
      const contentState = ContentState.createFromBlockArray(contentBlock.contentBlocks);
      const rawContentState = convertToRaw(contentState);

      await createPost({ ...data, content: JSON.stringify(rawContentState) });
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
          <Input id="title" placeholder="Title" {...register('title')} />
          {errors.title && <p className='text-red-700 text-ms pl-2 font-semibold'>{errors.title.message}</p>}
        </div>

        <div className="grid w-full gap-2">
          <Label htmlFor="content">Text</Label>
          <ReactQuill value={content} onChange={(value) => setValue('content', value)} className='w-[30rem] h-[20rem]' />
          {errors.content && <p className='text-red-700 text-ms pl-2 font-semibold'>{errors.content.message}</p>}
          <Button type="submit" className='mt-[4rem]'>Publish</Button>
        </div>
      </div>
    </form>
  );
};

export default NewPostForm;