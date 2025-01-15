import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthorizationModule } from './authorization/authorization.module';
import { DatabaseModule } from './database/database.module';
import { JwtModule } from '@nestjs/jwt';
import { JwtGuard } from './authorization/jwt.guard';
import { LoggerMiddleware } from './logger.middleware';

@Module({
  imports: [
    JwtModule.register({
      global: true,
      secret: 'myVerySecureSecret',
      signOptions: { expiresIn: '180s' },
    }),
    DatabaseModule,
    AuthorizationModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggerMiddleware)
      .forRoutes('/auth/login');
  }

}
