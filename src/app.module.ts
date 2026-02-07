import { Module } from '@nestjs/common';
import { AppConfigModule } from './config/app/config.module';
import { DBConfigModule } from './config/database/postgresql/config.module';
import { SwaggerConfigModule } from './config/openapi/swagger/config.module';
import { HelloModule } from './api/hello/hello.module';
import { GastosModule } from './api/gastos/gastos.module';
import { PostgreSQLDatabaseProviderModule } from './providers/database/postgresql/provider.module';
import { HealthController } from './api/health/health.controller';
import { HelloController } from './api/hello/hello.controller';
import { HelloService } from './api/hello/hello.service';
import { CacheModule } from '@nestjs/cache-manager';
import { CatalogosModule } from './api/catalogos/catalogos.module';

@Module({
  imports: [
    AppConfigModule,
    DBConfigModule,
    PostgreSQLDatabaseProviderModule,
    SwaggerConfigModule,
    HelloModule,
    GastosModule,
    CatalogosModule,
    CacheModule.register({
      isGlobal: true,
      ttl: 5000, // Cache expiration time
      max: 100, // Maximum number of items in cache
    }),
  ],
  controllers: [HelloController, HealthController],
  providers: [HelloService],
})
export class AppModule {}
