import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, MessageCircle, Briefcase, TrendingUp } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-primary/10 via-background to-secondary/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                Connect & Share with
                <span className="block text-primary">Professionals</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Join our community of professionals. Share your thoughts, connect with peers, 
                and build meaningful professional relationships.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/register">
                <Button size="lg" className="w-full sm:w-auto">
                  Get Started
                </Button>
              </Link>
              <Link to="/login">
                <Button variant="outline" size="lg" className="w-full sm:w-auto">
                  Sign In
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-24 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Why Join Our Community?</h2>
            <p className="text-lg text-muted-foreground">
              Connect, share, and grow with professionals worldwide
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center">
              <CardHeader>
                <Users className="w-12 h-12 text-primary mx-auto mb-4" />
                <CardTitle>Connect</CardTitle>
                <CardDescription>
                  Build meaningful professional relationships with peers in your industry
                </CardDescription>
              </CardHeader>
            </Card>
            
            <Card className="text-center">
              <CardHeader>
                <MessageCircle className="w-12 h-12 text-primary mx-auto mb-4" />
                <CardTitle>Share</CardTitle>
                <CardDescription>
                  Share your thoughts, achievements, and insights with the community
                </CardDescription>
              </CardHeader>
            </Card>
            
            <Card className="text-center">
              <CardHeader>
                <Briefcase className="w-12 h-12 text-primary mx-auto mb-4" />
                <CardTitle>Grow</CardTitle>
                <CardDescription>
                  Expand your professional network and discover new opportunities
                </CardDescription>
              </CardHeader>
            </Card>
            
            <Card className="text-center">
              <CardHeader>
                <TrendingUp className="w-12 h-12 text-primary mx-auto mb-4" />
                <CardTitle>Learn</CardTitle>
                <CardDescription>
                  Stay updated with industry trends and learn from experts
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-24">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Join thousands of professionals already connecting and sharing on our platform
          </p>
          <Link to="/register">
            <Button size="lg">
              Create Your Account
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Index;
