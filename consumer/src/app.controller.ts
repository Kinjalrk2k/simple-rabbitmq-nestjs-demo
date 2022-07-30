import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import {
  MessagePattern,
  Payload,
  Ctx,
  RmqContext,
} from '@nestjs/microservices';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @MessagePattern('producer')
  execute(@Payload() data: any, @Ctx() context: RmqContext) {
    const channel = context.getChannelRef();
    const orginalMessage = context.getMessage();

    this.appService.executeMessage(data);

    channel.ack(orginalMessage);
  }
}
