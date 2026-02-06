import 'reflect-metadata';
import { config as dotenvConfig } from 'dotenv';
import { DataSource } from 'typeorm';
import { Persona } from '../../api/entities/persona.entity';
import { Gasto } from '../../api/entities/gastos.entity';
import { TipoGasto } from '../../api/entities/tipo-gasto.entity';
import { CategoriaGasto } from '../../api/entities/categoria-gasto.entity';
import { SubcategoriaGasto } from '../../api/entities/subcategoria-gasto.entity';
import { getEnvironmentPath } from '../../common/helpers/environment.helper';
import { ENVIRONMENT_PATH } from '../../common/constants/constants';

dotenvConfig({ path: getEnvironmentPath(ENVIRONMENT_PATH) });

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: process.env.DB_HOST,
  port: process.env.DB_PORT ? parseInt(process.env.DB_PORT) : 5432,
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD ?? '',
  database: process.env.DB_NAME,
  entities: [Persona, Gasto, TipoGasto, CategoriaGasto, SubcategoriaGasto],
  migrations: ['src/migrations/*.ts'],
  synchronize: true,
});
