import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { MessageEntity } from './message.entity';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/hello')
  getHello(): MessageEntity {
    return this.appService.getHello();
  }
}
