import { Injectable } from '@nestjs/common';
import { QueueService } from './queue/queue.service';

@Injectable()
export class AppService {
  constructor(private readonly queueService: QueueService) {}

  async enqueue(body: any) {
    return this.queueService.publishMessage('producer', body);
  }
}
