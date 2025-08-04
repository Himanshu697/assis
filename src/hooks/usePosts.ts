import { useState, useEffect } from "react";
import { Post } from "@/types";

export const usePosts = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Load initial posts
    const mockPosts: Post[] = [
      {
        id: "1",
        author: "John Doe",
        content: "Just completed an amazing project! Excited to share my learning journey with the community.",
        timestamp: "2 hours ago",
        likes: 12,
        comments: 3,
      },
      {
        id: "2",
        author: "Sarah Wilson",
        content: "Looking forward to connecting with fellow professionals. Let's build something great together!",
        timestamp: "4 hours ago",
        likes: 8,
        comments: 1,
      },
      {
        id: "3",
        author: "Mike Johnson",
        content: "Grateful for this community and the opportunities to learn from each other.",
        timestamp: "1 day ago",
        likes: 15,
        comments: 5,
      },
    ];
    
    setPosts(mockPosts);
    setIsLoading(false);
  }, []);

  const createPost = (content: string) => {
    const newPost: Post = {
      id: (posts.length + 1).toString(),
      author: "You",
      content,
      timestamp: "now",
      likes: 0,
      comments: 0,
    };
    
    setPosts(prev => [newPost, ...prev]);
    return newPost;
  };

  const likePost = (postId: string) => {
    setPosts(prev => 
      prev.map(post => 
        post.id === postId 
          ? { ...post, likes: post.likes + 1 }
          : post
      )
    );
  };

  return {
    posts,
    isLoading,
    createPost,
    likePost,
  };
};