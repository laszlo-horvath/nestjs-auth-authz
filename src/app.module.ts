import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthorizationModule } from './authorization/authorization.module';
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [DatabaseModule, AuthorizationModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
