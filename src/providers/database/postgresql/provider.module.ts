import { DatabaseType } from 'typeorm';
import { Module } from '@nestjs/common';
import { TypeOrmModule, TypeOrmModuleAsyncOptions } from '@nestjs/typeorm';
import { DBConfigModule } from 'src/config/database/postgresql/config.module';
import { DBConfigService } from 'src/config/database/postgresql/config.service';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [DBConfigModule],
      useFactory: (dbConfigService: DBConfigService) => ({
        type: 'postgres' as DatabaseType,
        host: dbConfigService.host,
        port: dbConfigService.port,
        username: dbConfigService.user,
        password: dbConfigService.password,
        database: dbConfigService.database,
        schema: 'TestSchema', //TODO: Include in config services
        autoLoadEntities: true,
        synchronize: true,
      }),
      inject: [DBConfigService],
    } as TypeOrmModuleAsyncOptions),
  ],
})
export class PostgreSQLDatabaseProviderModule {}
