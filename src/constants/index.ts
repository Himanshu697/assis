export const APP_NAME = "LinkedIn Mini";

export const ROUTES = {
  HOME: "/",
  LOGIN: "/login",
  REGISTER: "/register",
  DASHBOARD: "/home",
  PROFILE: "/profile",
} as const;

export const API_ENDPOINTS = {
  POSTS: "/api/posts",
  USERS: "/api/users",
  AUTH: "/api/auth",
} as const;

export const MESSAGES = {
  LOGIN_SUCCESS: "Login successful!",
  LOGIN_ERROR: "Please check your credentials and try again.",
  REGISTER_SUCCESS: "Registration successful!",
  REGISTER_ERROR: "Please try again.",
  POST_CREATED: "Post created!",
  POST_CREATED_DESC: "Your post has been shared with the community.",
} as const;