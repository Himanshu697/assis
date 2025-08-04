@@ .. @@
-import { clsx, type ClassValue } from "clsx"
-import { twMerge } from "tailwind-merge"
-
-export function cn(...inputs: ClassValue[]) {
-  return twMerge(clsx(inputs))
-}
+// Re-export from utils for backward compatibility
+export { cn } from "@/utils/cn";
+export * from "@/utils/formatters";
+export * from "@/utils/validators";