export interface User {
  username: string;
  email: string;
  password: string;
  name?: string;
  lastname?: string;
  type: "google" | "github" | "email";
  image: string;
  typeUser: "admin" | "user";
  status: number;
}
