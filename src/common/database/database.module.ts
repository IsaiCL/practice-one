/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductsEntity } from 'src/common/products/products.entity';
import { UsersEntity } from '../users/users.entity';




@Module({
    imports: [
        TypeOrmModule.forRoot({
            type: 'mysql',
            host: '127.0.0.1',
            port: 3306,
            username: 'root',
            password: '123456',
            database: 'practice-one',
            entities: [ProductsEntity, UsersEntity],
            synchronize: true,
        }),
    ],

    exports: [TypeOrmModule]

})

export class DatabaseModule{}