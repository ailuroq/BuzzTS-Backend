import { createConnection } from "typeorm";
import { DATABASE_CONNECTION } from "../app.constants";

export const databaseProviders = [
  {
    provide: DATABASE_CONNECTION,
    useFactory: async () =>
      await createConnection({
        type: 'postgres',
        host: 'localhost',
        port: 5432,
        username: 'postgres',
        password: 'root',
        database: 'blog',
        entities: [
          __dirname + 'src/models/*.entity{.ts,.js}'
        ],
        synchronize: true,
      }),
  },
];
