import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { CatsModule } from './cats/cats.module';
import { LoggerMiddleWare } from './middleware/logger.middleware';

@Module({
  imports: [UsersModule, CatsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleWare).forRoutes('cats');
  }
}
