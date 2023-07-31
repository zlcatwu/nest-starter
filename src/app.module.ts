import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { getConfig } from '@config';
import type { DBConfig, Mode } from '@config';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [getConfig],
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => {
        const dbConfig = configService.get<DBConfig>('database');
        const mode = configService.get<Mode>('mode');
        return {
          ...dbConfig,
          type: 'postgres',
          synchronize: mode === 'dev',
          autoLoadEntities: true,
        };
      },
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
