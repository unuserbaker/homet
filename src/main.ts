import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { LogLevel, ValidationPipe } from '@nestjs/common';
import helmet from 'helmet';

import { AppConfigService } from './config/app/config.service';
import { SwaggerConfigModule } from './config/openapi/swagger/config.module';
import { SwaggerConfigService } from './config/openapi/swagger/config.service';
import { LoggerInterceptor } from './common/interceptors/logger.interceptor';

const port = Number(process.env.PORT ?? 3000);

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
}
bootstrap()
  .then(() => {
    console.log(`The app is up! on a port ${port.toString()}`);
  })
  .catch(() => new Error('Something fail loading the app'));
