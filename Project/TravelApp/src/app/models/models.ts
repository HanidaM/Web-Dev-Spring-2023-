export interface AuthToken {
    token: string;
};

export interface SignUpToken {
    username: string;
    first_name: string;
    last_name: string;
    password: string;
    email: string;
};

export interface Tour {
    id: number;
    name: string;
    description: string;
    price: number;
    duration: number;
    imageUrl: string;
    userId: number;
  }
  