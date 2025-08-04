import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface UserAvatarProps {
  name: string;
  src?: string;
  size?: "sm" | "md" | "lg";
  className?: string;
}

export const UserAvatar = ({ name, src, size = "md", className }: UserAvatarProps) => {
  const sizeClasses = {
    sm: "h-8 w-8",
    md: "h-10 w-10",
    lg: "h-24 w-24",
  };

  return (
    <Avatar className={`${sizeClasses[size]} ${className}`}>
      {src && <AvatarImage src={src} alt={name} />}
      <AvatarFallback className={size === "lg" ? "text-2xl" : ""}>
        {name[0]?.toUpperCase()}
      </AvatarFallback>
    </Avatar>
  );
};