import { createKnex } from "./knex";

const KnexSql = createKnex({
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE,
    port: parseInt(process.env.DATABASE_PORT),
    ssl: true
});
  
export const knex = KnexSql.knex;