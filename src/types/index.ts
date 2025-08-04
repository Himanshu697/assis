export interface User {
  id: string;
  name: string;
  email: string;
  bio?: string;
  location?: string;
  position?: string;
  joinDate: string;
  avatar?: string;
}

export interface Post {
  id: string;
  author: string;
  content: string;
  timestamp: string;
  likes: number;
  comments: number;
  user_id?: string;
  author_name?: string;
  created_at?: string;
  likes_count?: number;
  comments_count?: number;
}

export interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
}