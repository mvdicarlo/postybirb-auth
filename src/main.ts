import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { AllExceptionsFilter } from './exception.filter';
import * as bodyParser from 'body-parser';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalFilters(new AllExceptionsFilter());
  app.use(bodyParser.json({ limit: '30mb' }));
  app.use(bodyParser.urlencoded({ limit: '1mb', extended: false }));
  await app.listen(3000);
}
bootstrap();
