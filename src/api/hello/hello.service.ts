import { Injectable, Logger } from '@nestjs/common';

@Injectable()
export class HelloService {
  private readonly logger = new Logger(HelloService.name, { timestamp: true });

  getHello(): string {
    try {
      // These work in development, but they are the only ones allowed in production.
      this.logger.log('LOG - Hello service has been called...');
      this.logger.warn('WARN - Hello service has been called...');
      this.logger.error('ERROR - Hello service has been called...');

      // These only work in a development environment.
      this.logger.verbose('VERBOSE - Hello service has been called...');
      this.logger.debug('DEBUG - Hello service has been called...');

      // This is for testing error logging throw exception flow
      //throw new NotFoundException('Testing error handling');

      return 'Hello World!';
    } catch (error) {
      this.logger.error(error);
      return '';
    }
  }
}
