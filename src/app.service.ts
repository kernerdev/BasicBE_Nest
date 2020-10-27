import { Injectable } from '@nestjs/common';
import { MessageEntity } from "./message.entity";

@Injectable()
export class AppService {
  getHello(): MessageEntity {
    const messageEntity:MessageEntity = new MessageEntity();
    messageEntity.message = "Hello, World!";
    return messageEntity;
  }
}
