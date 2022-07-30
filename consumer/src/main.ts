import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Transport, MicroserviceOptions } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppModule,
    {
      transport: Transport.RMQ,
      options: {
        urls: ['amqp://rabbit:carrot@localhost:5672/'],
        queue: 'requests-queue',
        noAck: false,
        prefetchCount: 1,
      },
    },
  );

  await app.listen();
}
bootstrap();
