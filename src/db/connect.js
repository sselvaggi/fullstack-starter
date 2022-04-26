import pg from "pg";

export default new pg.Pool({
  user: process.env.POSTGRES_USER ?? "root",
  host: "postgres",
  database: process.env.POSTGRES_DB ?? "root",
  password: process.env.POSTGRES_PASSWORD ?? "root",
  port: process.env.POSTGRES_PORT ?? 5432,
});
