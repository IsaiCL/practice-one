import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './common/database/database.module';
import { ProductsModule } from './common/products/products.module';
import { UsersModule } from './common/users/users.module';
import { AuthModule } from './common/auth/auth.module';

@Module({
  imports: [DatabaseModule, ProductsModule, UsersModule, AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
