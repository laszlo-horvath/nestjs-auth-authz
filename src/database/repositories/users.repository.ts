export interface User {
  id: number;
  username: string;
  password: string; // Please note: In real app this would be hashed!
  roles: string[];
}

export class UsersRepository {
  private readonly users: User[] = [
    {
      id: 1,
      username: 'admin',
      password: 'admin123', // Never store plain text passwords in real app!
      roles: ['admin'],
    },
    {
      id: 2,
      username: 'user',
      password: 'user123',
      roles: ['user'],
    },
    {
      id: 3,
      username: 'john',
      password: 'john123',
      roles: ['user', 'editor'],
    },
  ];

  async findByUsername(username: string): Promise<User | undefined> {
    return this.users.find((user) => user.username === username);
  }

  async findById(id: number): Promise<User | undefined> {
    return this.users.find((user) => user.id === id);
  }

  async create(user: Omit<User, 'id'>): Promise<User> {
    const newUser = {
      ...user,
      id: this.users.length + 1,
    };
    this.users.push(newUser);
    return newUser;
  }

  async getAll(): Promise<User[]> {
    // Return a copy to prevent direct modification
    return [...this.users];
  }
}
