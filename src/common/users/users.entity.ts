/* eslint-disable prettier/prettier */
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { IsNotEmpty, IsString, Length } from 'class-validator';

@Entity('users')

export class UsersEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @IsNotEmpty()
    @IsString()
    @Column('varchar')
    username: string;

    @IsNotEmpty()
    @IsString()
    @Column('varchar')
    name: string;

    @IsNotEmpty()
    @IsString()
    @Column('varchar')
    lastname: string;

    @IsNotEmpty()
    @Column('varchar')
    email: string;

    @IsNotEmpty()
    @Length(8,25)
    @Column('varchar')
    password: string;
    
}