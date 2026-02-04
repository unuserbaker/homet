<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

## NestJs Base Project Template


## Description

NestJS is a progressive Node.js framework for building efficient, scalable, and reliable server-side applications in TypeScript. It leverages TypeScript's features and architectural patterns like those seen in Angular to create well-structured and maintainable code, using modules, controllers, and providers.

This project aims to provide a pre-configured base project with the configurations, components, elements, and best practices necessary to develop quality software products.

This includes aspects such as:

#### Fundamentals
- Structured Architecture
- Well-organized folder structure
- Configuration Services
- Custom Interceptors
- Custom Providers
- Asyncronous providers
- Dynamic modules
- Injection Scopes
- Lazy-loading
- Exception handling
- Pipes
- Guards
- Environment files support

#### Database

- Database service configuration
- PostreSql Module
- TypeOrm Schema Support
- DTO's and Entities support
- Data validation
- Transformation
- Auto mapping
- Partial types support

#### Common Services

- In-memory Cache
- File upload
- Loggin service
- AWS Service Support (Logging, Authentication, Stores)

#### Security
- Health check
- Helmet
- Validations
- CORS
- CSRF Protection
- Rate Limits
- Exception filters
- Terminus
- JWT support

#### Testing
- Jest
- Jest-Mock
- Supertest

#### Development Tools
- OpenApi - Swagger
- Hot Reload
- Linting and formatting
- Styles & Rules
- Secure compiler configuration
- Docker compose support

#### Deployment
- Docker containerization script
- Docker compose script

## Project setup

```bash
$ pnpm install
```

## Compile and run the project

```bash
# development
$ pnpm run start

# watch mode
$ pnpm run start:dev

# production mode
$ pnpm run start:prod
```

## Run tests

```bash
# unit tests
$ pnpm run test

# e2e tests
$ pnpm run test:e2e

# test coverage
$ pnpm run test:cov
```

## Run linter & formatter

```bash
# lint with eslint
$ pnpm run lint

# lint with automatic fixes
$ pnpm run lint -- --fix

# format with prettier
$ pnpm run format
```

## Run docker containerization script

```bash
# build app and create image
$ docker build -t imageName .

# run the new image
$ docker run -p 3000:3000 imageName
```

## Deployment

When you're ready to deploy your NestJS application to production, there are some key steps you can take to ensure it runs as efficiently as possible. Check out the [deployment documentation](https://docs.nestjs.com/deployment) for more information.

## Resources

**TypeScript Development Guidelines**
https://gist.github.com/fabecerram/53f27afdc025602a86176ab7b44c9bac

**TypeScript Programming Styles Guide**
https://gist.github.com/fabecerram/937bb807a7f50136135c6874b8346fb9

**NestJs - Typescript Linters and Formatting tools**
https://gist.github.com/fabecerram/82f9214a5eaeb73eaf74483f614f5329

Check out a few resources that may come in handy when working with NestJS:

- Visit the [NestJS Documentation](https://docs.nestjs.com) to learn more about the framework.
- For questions and support, please visit our [Discord channel](https://discord.gg/G7Qnnhy).

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).
