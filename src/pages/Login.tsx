@@ .. @@
 import { Button } from "@/components/ui/button";
 import { Input } from "@/components/ui/input";
 import { Label } from "@/components/ui/label";
 import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
-import { useToast } from "@/hooks/use-toast";
+import { useToast, useAuth } from "@/hooks";
+import { MESSAGES, ROUTES } from "@/constants";
+import { validateEmail, validatePassword } from "@/utils";

 const Login = () => {
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");
-  const [isLoading, setIsLoading] = useState(false);
   const navigate = useNavigate();
   const { toast } = useToast();
+  const { login, isLoading } = useAuth();

   const handleLogin = async (e: React.FormEvent) => {
     e.preventDefault();
-    setIsLoading(true);
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
-      // TODO: Implement Supabase login
+      await login(email, password);
       toast({
-        title: "Login successful!",
-        description: "Welcome back to the community.",
+        title: MESSAGES.LOGIN_SUCCESS,
+        description: "Welcome back to the community.",
       });
-      navigate("/home");
+      navigate(ROUTES.DASHBOARD);
     } catch (error) {
       toast({
         title: "Login failed",
-        description: "Please check your credentials and try again.",
+        description: MESSAGES.LOGIN_ERROR,
         variant: "destructive",
       });
-    } finally {
-      setIsLoading(false);
     }
   };