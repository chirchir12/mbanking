import 'dotenv/config';
import { DataSource } from 'typeorm';
import { databaseConfig } from './config/db.config';
import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions';

export default new DataSource(
  databaseConfig().main as PostgresConnectionOptions,
);
