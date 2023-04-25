import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { addTransactionalDataSource } from 'typeorm-transactional';
import { DataSource } from 'typeorm';
import { getConfig, getDataSourceConfig } from './common/database/configuration';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: `.env`,
      ignoreEnvFile: false,
    }),
    TypeOrmModule.forRootAsync({
      useFactory: () => getConfig(),
      dataSourceFactory: async function () {
        return addTransactionalDataSource(new DataSource(getDataSourceConfig()));
      },
    }),
    UsersModule,
  ],
})
export class AppModule {}
