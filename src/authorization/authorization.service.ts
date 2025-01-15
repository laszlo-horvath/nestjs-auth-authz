import { Injectable } from '@nestjs/common';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class AuthorizationService {
  constructor(private readonly databaseService: DatabaseService) {}

  async login() {
    return this.databaseService.getAll();
  }
}
