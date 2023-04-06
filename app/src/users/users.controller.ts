import { Get, Controller, Render } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './user.entity';

@Controller('users')
export class UsersController {
    constructor(private readonly userService: UsersService) { }

    @Get()
    async findAll(): Promise<User[]> {
        return this.userService.findAll();
    }

    @Get('index')
    @Render('users_index')
    async test() {
        let b = await this.userService.findAll();

        console.log(b)
        let a = { users: b }

        return a;
    }
}