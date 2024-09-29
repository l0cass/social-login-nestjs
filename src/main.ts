import { NestFactory } from '@nestjs/core';
import { RootModule } from './root.module';
import { environment } from './config';

bootstrap();

async function bootstrap() {
  const app = await NestFactory.create(RootModule);
  await app.listen(environment.PORT);
}
