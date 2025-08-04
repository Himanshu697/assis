@@ .. @@
 import { Button } from "@/components/ui/button";
 import { Input } from "@/components/ui/input";
 import { Label } from "@/components/ui/label";
 import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
-import { useToast } from "@/hooks/use-toast";
+import { useToast, useAuth } from "@/hooks";
+import { MESSAGES, ROUTES } from "@/constants";
+import { validateEmail, validatePassword, validateRequired } from "@/utils";

 const Register = () => {
   const [name, setName] = useState("");
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");
-  const [isLoading, setIsLoading] = useState(false);
   const navigate = useNavigate();
   const { toast } = useToast();
+  const { register, isLoading } = useAuth();

   const handleRegister = async (e: React.FormEvent) => {
     e.preventDefault();
-    setIsLoading(true);
+    
+    if (!validateRequired(name)) {
+      toast({
+        title: "Name required",
+        description: "Please enter your full name.",
+        variant: "destructive",
+      });
+      return;
+    }
+    
+    if (!validateEmail(email)) {
+      toast({
+        title: "Invalid email",
+        description: "Please enter a valid email address.",
+        variant: "destructive",
+      });
+      return;
+    }
+    
+    if (!validatePassword(password)) {
+      toast({
+        title: "Invalid password",
+        description: "Password must be at least 6 characters long.",
+        variant: "destructive",
+      });
+      return;
+    }

     try {
-      // TODO: Implement Supabase registration
+      await register(name, email, password);
       toast({
-        title: "Registration successful!",
-        description: "Welcome to the community.",
+        title: MESSAGES.REGISTER_SUCCESS,
+        description: "Welcome to the community.",
       });
-      navigate("/home");
+      navigate(ROUTES.DASHBOARD);
     } catch (error) {
       toast({
         title: "Registration failed",
-        description: "Please try again.",
+        description: MESSAGES.REGISTER_ERROR,
         variant: "destructive",
       });
-    } finally {
-      setIsLoading(false);
     }
   };