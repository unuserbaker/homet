import * as Joi from 'joi';
import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import configuration from './configuration';
import { CacheConfigService } from './config.service';
import { getEnvironmentPath } from 'src/common/helpers/environment.helper';
import { ENVIRONMENT_PATH } from 'src/common/constants/constants';

const envFilePath: string = getEnvironmentPath(ENVIRONMENT_PATH);

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath,
      load: [configuration],
      validationSchema: Joi.object({
        CACHE_IS_GLOBAL: Joi.boolean(),
        CACHE_TTL: Joi.number().default(5000),
        CACHE_MAX_ITEM: Joi.number().default(100),
      }),
    }),
  ],
  providers: [ConfigService, CacheConfigService],
  exports: [ConfigService, CacheConfigService],
})
export class CacheConfigModule {}
