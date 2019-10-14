import Knex from "knex";

interface KnexConfig {
    host: string
    port: number
    database: string
    user: string
    password: string
    ssl: boolean
}

export function createKnex(config: KnexConfig) {

    const  knex: Knex = Knex({
        client: "pg",
        connection: {
            ...config,
            timezone: "America/Sao_Paulo"
        },
        pool: {
            max: 20,
            idleTimeoutMillis: 60000
        }
    });

    return { knex };
}