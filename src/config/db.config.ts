import { registerAs } from '@nestjs/config';

export const databaseConfig = registerAs('databases', () => ({
  main: {
    type: 'postgres',
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    synchronize: false,
    entities: ['dist/database/entities/*.entity.js'],
    migrations: ['dist/database/migrations/*.js'],
    autoLoadEntities: true,
    extra: {
      poolSize: Number(process.env.DATABASE_POOL_SIZE) || 15,
    },
  },
}));
