import { Module } from '@nestjs/common';
import { AuthorizationController } from './authorization.controller';
import { AuthorizationService } from './authorization.service';
import { DatabaseService } from 'src/database/database.service';

@Module({
  imports: [],
  controllers: [AuthorizationController],
  providers: [AuthorizationService, DatabaseService],
})
export class AuthorizationModule {}
