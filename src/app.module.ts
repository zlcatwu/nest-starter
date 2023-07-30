import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { getConfig } from '@config';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [getConfig],
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
