import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { LogLevel, ValidationPipe } from '@nestjs/common';
import helmet from 'helmet';

import { AppConfigService } from './config/app/config.service';
import { SwaggerConfigModule } from './config/openapi/swagger/config.module';
import { SwaggerConfigService } from './config/openapi/swagger/config.service';
import { LoggerInterceptor } from './common/interceptors/logger.interceptor';

async function bootstrap(): Promise<void> {
  const isProduction = process.env.NODE_ENV === 'production';
  const logLevels: LogLevel[] = isProduction
    ? ['error', 'warn', 'log']
    : ['error', 'warn', 'log', 'verbose', 'debug'];

  const app = await NestFactory.create(AppModule, {
    logger: logLevels,
  });

  const appConfig: AppConfigService = app.get(AppConfigService);
  const swaggerConfig: SwaggerConfigService = app.get(SwaggerConfigService);
  const port = appConfig.port;

  app.setGlobalPrefix('api');
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
    }),
  );

  app.use(helmet());

  if (appConfig.env == 'development') {
    const swagger: SwaggerConfigModule = new SwaggerConfigModule(swaggerConfig);
    swagger.setup(app);
  }

  app.useGlobalInterceptors(new LoggerInterceptor());

  await app.listen(port);
  console.log(`🚀 App running on port ${port} in ${appConfig.env} mode`);
}
bootstrap().catch((err) => {
  console.error('❌ Failed to start app:', err);
  process.exit(1);
});
