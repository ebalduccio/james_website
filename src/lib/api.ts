import axios from 'axios';

const API_BASE_URL = process.env.API_BASE_URL;

export interface Post {
  id: number;
  title: string;
  content: string;
  createdAt: string; // Alterado para string para refletir o tipo recebido
  updatedAt: string; // Corrigido o nome para ser consistente
}

// Função para buscar todos os posts
export async function getPosts(): Promise<Post[]> {
  try {
    const response = await axios.get(`${API_BASE_URL}`);
    const posts: Post[] = response.data.map((post: any) => {
      // Conversão da string para Date e formatação
      const createdAtDate = new Date(post.created_at);
      const formattedDate = createdAtDate.toLocaleString();

      // Logs para conferência
      console.log(`Original created_at: ${post.created_at}`);
      console.log(`Converted Date object: ${createdAtDate}`);
      console.log(`Formatted Date string: ${formattedDate}`);

      return {
        ...post,
        content: extractTextFromJson(post.content), // Extrai o texto do JSON
        createdAt: formattedDate, // Atribui a data formatada
      };
    });
    return posts;
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
  console.log(`Fetching post by ID: ${id}`);
  try {
    const response = await axios.get(`${API_BASE_URL}/${id}`);
    const post = response.data;
    console.log('Fetched post:', post)
    return {
      ...post,
      content: extractTextFromJson(post.content), // Extrai o texto do JSON
      createdAt: new Date(post.created_at).toLocaleString(),
    };
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
export async function createPost(data: Omit<Post, 'id' | 'createdAt' | 'updatedAt'>): Promise<void> {
  try {
    // Converte o conteúdo para string JSON antes de enviar para o banco de dados
    const postData = {
      ...data,
      content: JSON.stringify(data.content),
    };

    console.log(postData)

    await axios.post(`${API_BASE_URL}`, postData);
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
export async function updatePost(id: number, data: Omit<Post, 'id' | 'createdAt' | 'updatedAt'>): Promise<void> {
  try {
    // Converte o conteúdo para string JSON antes de enviar para o banco de dados
    const postData = {
      ...data,
      content: JSON.stringify(data.content),
    };

    await axios.put(`${API_BASE_URL}/${id}`, postData);
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


// Função auxiliar para extrair texto do conteúdo JSON
function extractTextFromJson(jsonString: string): string {
  try {
    // Remove caracteres de escape extras
    const cleanedJsonString = jsonString.replace(/\\n/g, '').replace(/\\"/g, '"').replace(/^"|"$/g, '');
    const jsonObject = JSON.parse(cleanedJsonString);
    return extractText(jsonObject);
  } catch (error) {
    console.error('Error parsing JSON:', error);
    return jsonString;
  }
}

// Função recursiva para extrair texto
function extractText(obj: any): string {
  let text = '';

  if (Array.isArray(obj)) {
    for (const item of obj) {
      text += extractText(item) + ' ';
    }
  } else if (typeof obj === 'object' && obj !== null) {
    if (obj.text) {
      text += obj.text + ' ';
    }
    for (const key in obj) {
      if (obj.hasOwnProperty(key) && key !== 'text') {
        text += extractText(obj[key]);
      }
    }
  }

  return text.trim();
}



