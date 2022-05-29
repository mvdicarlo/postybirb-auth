import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { AllExceptionsFilter } from './exception.filter';
import * as bodyParser from 'body-parser';
import { rateLimit } from 'express-rate-limit';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalFilters(new AllExceptionsFilter());
  app.use(bodyParser.json({ limit: '30mb' }));
  app.use(bodyParser.urlencoded({ limit: '1mb', extended: false }));

  const limiter = rateLimit({
    max: 25,
    windowMs: 60_000 * 60
  });

  app.use(limiter);

  await app.listen(process.env.PORT || 3000);
}
bootstrap();
