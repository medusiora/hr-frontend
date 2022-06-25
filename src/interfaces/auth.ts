export interface User {
  id: number;
  name: string;
  sub?: string;
  iat?: number;
}

export interface Credential {
  username: string | number;
  password: string | number;
}
