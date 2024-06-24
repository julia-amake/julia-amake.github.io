export type UserRoles = 'admin' | 'manager' | 'user';
export interface UserData {
  email: string;
  password: string;
  roles: UserRoles[];
}

export interface UserSchema {
  token: string;
  userData: UserData | null;
  isLoading?: boolean;
  error?: string;
}
