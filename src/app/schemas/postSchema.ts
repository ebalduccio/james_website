import { z } from 'zod';

export const postSchema = z.object({
  title: z.string().min(1, 'Title is required'), // Título do post, obrigatório, mínimo de 1 caractere
  content: z.string().min(1, 'Content is required'), // Conteúdo do post, obrigatório, mínimo de 1 caractere
  content_json: z.string().optional(), // JSON de conteúdo, opcional
});

export type PostSchema = z.infer<typeof postSchema>;