import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Transport } from '@nestjs/common/enums/transport.enum';

// async function bootstrap() {
//   const app = await NestFactory.create(AppModule);
//   await app.listen(3091);
// }

// Create a logger instance
const logger = new Logger('Main');

// Create the microservice options object
const microserviceOptions = {
  transport: Transport.TCP,
  options: {
    host: '127.0.0.1',
    port: 8877,
  },
};

async function bootstrap() {
  const app = await NestFactory.createMicroservice(AppModule, microserviceOptions);

  app.listen(() => {
    logger.log('Microservice is listenning...');
  });
}

bootstrap();
