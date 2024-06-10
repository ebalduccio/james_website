import axios from 'axios';

const API_BASE_URL = process.env.API_BASE_URL;

export interface Post {
  id: number;
  title: string;
  content: string;
  content_json?: string;
  createdAt: Date;
  updated_at: Date;
}

// Função para buscar todos os posts
export async function getPosts(): Promise<Post[]> {
  try {
    const response = await axios.get(`${API_BASE_URL}`);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error('Error fetching posts:', error.response?.data || error.message);
      throw new Error('Failed to fetch posts');
    }
    console.error('Unknown error:', error);
    throw new Error('An unknown error occurred');
  }
}

// Função para buscar um post pelo ID
export async function getPostById(id: number): Promise<Post> {
  try {
    const response = await axios.get(`${API_BASE_URL}/${id}`);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error('Error fetching post by ID:', error.response?.data || error.message);
      throw new Error('Failed to fetch post by ID');
    }
    console.error('Unknown error:', error);
    throw new Error('An unknown error occurred');
  }
}

// Função para criar um novo post
export async function createPost(data: Omit<Post, 'id' | 'createdAt' | 'updated_at'>): Promise<void> {
  try {
    await axios.post(`${API_BASE_URL}`, data);
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error('Error creating post:', error.response?.data || error.message);
      throw new Error('Failed to create post');
    }
    console.error('Unknown error:', error);
    throw new Error('An unknown error occurred');
  }
}

// Função para atualizar um post pelo ID
export async function updatePost(id: number, data: Omit<Post, 'id' | 'createdAt' | 'updated_at'>): Promise<void> {
  try {
    await axios.put(`${API_BASE_URL}/${id}`, data);
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error('Error updating post:', error.response?.data || error.message);
      throw new Error('Failed to update post');
    }
    console.error('Unknown error:', error);
    throw new Error('An unknown error occurred');
  }
}

// Função para deletar um post pelo ID
export async function deletePost(id: number): Promise<void> {
  try {
    await axios.delete(`${API_BASE_URL}/${id}`);
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error('Error deleting post:', error.response?.data || error.message);
      throw new Error('Failed to delete post');
    }
    console.error('Unknown error:', error);
    throw new Error('An unknown error occurred');
  }
}
