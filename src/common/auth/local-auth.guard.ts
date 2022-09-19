/* eslint-disable prettier/prettier */
import { Injectable, UseGuards, Post, Request } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Injectable()
export class LocalAuthGuard extends AuthGuard('local') {
    @UseGuards(LocalAuthGuard)
    @Post('auth/login')
    async login(@Request() req) {
    return req.user;
    }
}

