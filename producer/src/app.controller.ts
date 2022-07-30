import { Body, Controller, HttpStatus, Post, Res } from '@nestjs/common';
import { Response } from 'express';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post()
  async enqueue(@Body() body: any, @Res() res: Response) {
    await this.appService.enqueue(body);
    res.status(HttpStatus.ACCEPTED).json({ status: 'ACCEPTED' });
  }
}
