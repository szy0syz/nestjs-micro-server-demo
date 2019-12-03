import { Controller, Logger, Post, Body } from '@nestjs/common';
import { MathService } from './math.service';
import { MessagePattern } from '@nestjs/microservices'

@Controller()
export class AppController {
  // Create a logger instance
  private logger = new Logger('AppController');

  // Inject the math service
  constructor(private mathService: MathService) {}

  // Map the 'POST /add' route to this method
  // @Post('add')

  // Define the message pattern for this method
  @MessagePattern('add')
  async accumulate(data: number[])  {
    this.logger.log('Adding ' + data.toString()); // Log something on every call
    return this.mathService.accumulate(data); // use math service to calc result & return
  }
}
