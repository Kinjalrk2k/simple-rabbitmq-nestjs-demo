import { Inject, Injectable, Logger } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { Observable } from 'rxjs';

@Injectable()
export class QueueService {
  constructor(
    @Inject('RABBIT_MQ_MODULE') private readonly rabbitMqClinet: ClientProxy,
  ) {}

  publishMessage(pattern: string, data: any): Observable<any> {
    Logger.debug(`<Producer> ${JSON.stringify(data)}`, 'Queue');
    return this.rabbitMqClinet.emit(pattern, data);
  }
}
