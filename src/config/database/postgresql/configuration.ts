import { registerAs } from '@nestjs/config';
console.log(
  'Database Configuration Loaded',
  process.env.DB_HOST,
  process.env.DB_PORT,
  process.env.DB_NAME,
);
export default registerAs('db', () => ({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  name: process.env.DB_NAME,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
}));
