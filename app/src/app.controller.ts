import { Get, Controller, Render } from '@nestjs/common';

@Controller()
export class AppController {
    @Get()
    @Render('index')
    root() {
        let a = { message: 'Hello world11!' }

        return a;
    }
}