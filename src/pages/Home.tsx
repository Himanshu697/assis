@@ .. @@
 import { useState } from "react";
 import { Button } from "@/components/ui/button";
 import { Card, CardContent, CardHeader } from "@/components/ui/card";
 import { Textarea } from "@/components/ui/textarea";
-import { Avatar, AvatarFallback } from "@/components/ui/avatar";
-import { useToast } from "@/hooks/use-toast";
-import { PlusCircle, MessageCircle, Heart, Share2 } from "lucide-react";
+import { useToast } from "@/hooks";
+import { PlusCircle } from "lucide-react";
 import Navigation from "@/components/Navigation";
+import { PostCard, UserAvatar } from "@/components/common";
+import { usePosts } from "@/hooks/usePosts";
+import { MESSAGES } from "@/constants";

-// Mock data for posts
-const mockPosts = [
-  {
-    id: 1,
-    author: "John Doe",
-    content: "Just completed an amazing project! Excited to share my learning journey with the community.",
-    timestamp: "2 hours ago",
-    likes: 12,
-    comments: 3,
-  },
-  {
-    id: 2,
-    author: "Sarah Wilson",
-    content: "Looking forward to connecting with fellow professionals. Let's build something great together!",
-    timestamp: "4 hours ago",
-    likes: 8,
-    comments: 1,
-  },
-  {
-    id: 3,
-    author: "Mike Johnson",
-    content: "Grateful for this community and the opportunities to learn from each other.",
-    timestamp: "1 day ago",
-    likes: 15,
-    comments: 5,
-  },
-];

 const Home = () => {
   const [newPost, setNewPost] = useState("");
-  const [posts, setPosts] = useState(mockPosts);
+  const { posts, createPost, likePost } = usePosts();
   const { toast } = useToast();

   const handleCreatePost = async () => {
-    console.log("Create post clicked, newPost content:", newPost);
-    console.log("newPost.trim():", newPost.trim());
-    console.log("newPost.trim() length:", newPost.trim().length);
-    
     if (!newPost.trim()) {
-      console.log("Post is empty, returning early");
       return;
     }

-    console.log("Creating new post...");
-    const post = {
-      id: posts.length + 1,
-      author: "You", // TODO: Get from authenticated user
-      content: newPost,
-      timestamp: "now",
-      likes: 0,
-      comments: 0,
-    };
-
-    console.log("New post object:", post);
-    setPosts([post, ...posts]);
+    createPost(newPost);
     setNewPost("");
-    console.log("Post created successfully");
     
     toast({
-      title: "Post created!",
-      description: "Your post has been shared with the community.",
+      title: MESSAGES.POST_CREATED,
+      description: MESSAGES.POST_CREATED_DESC,
     });
   };

-  const handleLike = (postId: number) => {
-    setPosts(posts.map(post => 
-      post.id === postId 
-        ? { ...post, likes: post.likes + 1 }
-        : post
-    ));
-  };
-
   return (
     <div className="min-h-screen bg-background">
       <Navigation />
@@ .. @@
           <CardHeader>
             <div className="flex items-center space-x-3">
-              <Avatar>
-                <AvatarFallback>You</AvatarFallback>
-              </Avatar>
+              <UserAvatar name="You" />
               <div className="flex-1">
                 <Textarea
                   placeholder="What's on your mind?"
@@ .. @@
         {/* Posts Feed */}
         <div className="space-y-4">
           {posts.map((post) => (
-            <Card key={post.id}>
-              <CardHeader>
-                <div className="flex items-center space-x-3">
-                  <Avatar>
-                    <AvatarFallback>{post.author[0]}</AvatarFallback>
-                  </Avatar>
-                  <div>
-                    <h3 className="font-semibold">{post.author}</h3>
-                    <p className="text-sm text-muted-foreground">{post.timestamp}</p>
-                  </div>
-                </div>
-              </CardHeader>
-              <CardContent>
-                <p className="mb-4">{post.content}</p>
-                <div className="flex items-center space-x-4 pt-2 border-t">
-                  <Button
-                    variant="ghost"
-                    size="sm"
-                    onClick={() => handleLike(post.id)}
-                    className="text-muted-foreground hover:text-primary"
-                  >
-                    <Heart className="w-4 h-4 mr-1" />
-                    {post.likes}
-                  </Button>
-                  <Button
-                    variant="ghost"
-                    size="sm"
-                    className="text-muted-foreground hover:text-primary"
-                  >
-                    <MessageCircle className="w-4 h-4 mr-1" />
-                    {post.comments}
-                  </Button>
-                  <Button
-                    variant="ghost"
-                    size="sm"
-                    className="text-muted-foreground hover:text-primary"
-                  >
-                    <Share2 className="w-4 h-4 mr-1" />
-                    Share
-                  </Button>
-                </div>
-              </CardContent>
-            </Card>
+            <PostCard 
+              key={post.id} 
+              post={post} 
+              onLike={likePost}
+            />
           ))}
         </div>
       </div>