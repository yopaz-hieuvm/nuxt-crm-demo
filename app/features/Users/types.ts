export type User = {
  id: number;
  email?: string;
  password?: string;
  name?: string;
  role?: string;
  avatar?: string;
};

export type CreatedUserRequest = Omit<User, "id">;
