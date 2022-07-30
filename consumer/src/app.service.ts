import { Injectable, Logger } from '@nestjs/common';

@Injectable()
export class AppService {
  executeMessage(data: any): any {
    setTimeout(() => {
      Logger.debug(`<Consumer> ${JSON.stringify(data)}`, 'Queue');
    }, 2000);

    return data;
  }
}
