import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { getConfig } from '@config';
import { Logger } from '@nestjs/common';

async function bootstrap() {
  const {
    serve: { port, hostname },
  } = getConfig();
  const app = await NestFactory.create(AppModule);
  await app.listen(port, hostname, () => {
    Logger.log(`Nest application serving at http://${hostname}:${port}`);
  });
}
bootstrap();
