/* eslint-disable prettier/prettier */
import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm/dist";
import { Repository } from "typeorm";
import { UsersEntity } from "src/common/users/users.entity";

@Injectable()

export class UsersService{
    
    constructor(
    @InjectRepository(UsersEntity) private usersRepository: Repository<UsersEntity>,
    ) { }

    async getUsers(user: UsersEntity): Promise<UsersEntity[]> {
        return await this.usersRepository.find();
    }
    
    [x: string]: any;
    async getUser(_id: number): Promise<UsersEntity> {
        return this.usersRepository.findOne({ where: { id: _id }})
    }

    async updateUsers(id: number, user: UsersEntity) {
        return this.usersRepository.update({id}, user)
    }

    async createUsers(user: UsersEntity) {
        return this.usersRepository.save(user);
    }

    async deleteUsers(user: UsersEntity) {
        return this.usersRepository.delete(user)
    }
    
}