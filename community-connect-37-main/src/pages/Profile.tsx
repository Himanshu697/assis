import { useState } from "react";
import { useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Textarea } from "@/components/ui/textarea";
import { Edit2, MapPin, Calendar, Briefcase } from "lucide-react";
import Navigation from "@/components/Navigation";

// Mock user data
const mockUser = {
  id: "1",
  name: "John Doe",
  email: "john.doe@example.com",
  bio: "Full-stack developer passionate about creating amazing user experiences. Love to learn new technologies and share knowledge with the community.",
  location: "San Francisco, CA",
  joinDate: "January 2024",
  position: "Senior Software Engineer",
  posts: [
    {
      id: 1,
      content: "Just completed an amazing project! Excited to share my learning journey with the community.",
      timestamp: "2 hours ago",
      likes: 12,
      comments: 3,
    },
    {
      id: 2,
      content: "Working on something exciting. Can't wait to share it with you all!",
      timestamp: "1 week ago",
      likes: 25,
      comments: 7,
    },
  ],
};

const Profile = () => {
  const { id } = useParams();
  const [isEditing, setIsEditing] = useState(false);
  const [bio, setBio] = useState(mockUser.bio);
  const [user] = useState(mockUser);
  const isOwnProfile = true; // TODO: Check if viewing own profile

  const handleSaveBio = () => {
    // TODO: Save bio to Supabase
    setIsEditing(false);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="max-w-4xl mx-auto p-4 space-y-6">
        {/* Profile Header */}
        <Card>
          <CardContent className="pt-6">
            <div className="flex flex-col md:flex-row items-start md:items-center space-y-4 md:space-y-0 md:space-x-6">
              <Avatar className="w-24 h-24">
                <AvatarFallback className="text-2xl">{user.name[0]}</AvatarFallback>
              </Avatar>
              
              <div className="flex-1 space-y-3">
                <div>
                  <h1 className="text-3xl font-bold">{user.name}</h1>
                  <p className="text-lg text-muted-foreground">{user.position}</p>
                </div>
                
                <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center">
                    <MapPin className="w-4 h-4 mr-1" />
                    {user.location}
                  </div>
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-1" />
                    Joined {user.joinDate}
                  </div>
                  <div className="flex items-center">
                    <Briefcase className="w-4 h-4 mr-1" />
                    {user.posts.length} posts
                  </div>
                </div>
                
                <div className="flex gap-2">
                  <Badge variant="secondary">React</Badge>
                  <Badge variant="secondary">TypeScript</Badge>
                  <Badge variant="secondary">Node.js</Badge>
                </div>
              </div>
              
              {isOwnProfile && (
                <Button variant="outline" onClick={() => setIsEditing(!isEditing)}>
                  <Edit2 className="w-4 h-4 mr-2" />
                  Edit Profile
                </Button>
              )}
            </div>
          </CardContent>
        </Card>

        {/* About Section */}
        <Card>
          <CardHeader>
            <CardTitle>About</CardTitle>
          </CardHeader>
          <CardContent>
            {isEditing ? (
              <div className="space-y-4">
                <Textarea
                  value={bio}
                  onChange={(e) => setBio(e.target.value)}
                  placeholder="Tell us about yourself..."
                  rows={4}
                />
                <div className="flex gap-2">
                  <Button onClick={handleSaveBio}>Save</Button>
                  <Button variant="outline" onClick={() => setIsEditing(false)}>
                    Cancel
                  </Button>
                </div>
              </div>
            ) : (
              <p className="text-muted-foreground leading-relaxed">
                {bio || "No bio available."}
              </p>
            )}
          </CardContent>
        </Card>

        {/* Posts Section */}
        <Card>
          <CardHeader>
            <CardTitle>Posts ({user.posts.length})</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {user.posts.map((post) => (
                <div key={post.id} className="border-b pb-4 last:border-b-0 last:pb-0">
                  <p className="mb-2">{post.content}</p>
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <span>{post.timestamp}</span>
                    <div className="flex gap-4">
                      <span>{post.likes} likes</span>
                      <span>{post.comments} comments</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Profile;