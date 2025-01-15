import { Injectable } from '@nestjs/common';
import { User, UsersRepository } from './repositories/users.repository';

@Injectable()
export class DatabaseService {
  private readonly usersRepository: UsersRepository;

  constructor() {
    this.usersRepository = new UsersRepository();
  }

  async findByUsername(username: string): Promise<User | undefined> {
    return this.usersRepository.findByUsername(username);
  }

  async findById(id: number): Promise<User | undefined> {
    return this.usersRepository.findById(id);
  }

  async create(user: User) {
    return this.usersRepository.create(user);
  }

  async getAll(): Promise<User[]> {
    return this.usersRepository.getAll();
  }
}
