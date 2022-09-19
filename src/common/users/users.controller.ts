/* eslint-disable prettier/prettier */
import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { UsersService} from './users.service';
import { UsersEntity } from "./users.entity";

@Controller('UserView')
export class UsersController {
    constructor(private usersService: UsersService) { }
    
    @Get('mostrarUsuarios')
    getAll(@Param()params) {
        return this.usersService.getUsers(params.id);
    }

    @Get(':id')
    getOne(@Param()params) {
        return this.usersService.getUser(params.id);
    }

    @Post('crearUsuario')
    create(@Body() user: UsersEntity) {
        return this.usersService.createUsers(user)
    }

    @Put(':id')
    update(@Body() user: UsersEntity, @Param() params) {
        return this.usersService.updateUsers(params.id, user)
    }

    @Delete(':id')
    delete(@Param() params) {
        return this.usersService.deleteUsers(params.id)
    }
}