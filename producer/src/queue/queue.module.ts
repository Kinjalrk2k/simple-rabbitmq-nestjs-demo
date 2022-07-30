import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { QueueService } from './queue.service';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'RABBIT_MQ_MODULE',
        transport: Transport.RMQ,
        options: {
          urls: ['amqp://rabbit:carrot@localhost:5672/'],
          queue: 'requests-queue',
        },
      },
    ]),
  ],
  providers: [QueueService],
  exports: [QueueService],
})
export class QueueModule {}
