import pg from "pg";

export const db = new pg.Pool({
  user: "postgres",
  host: "localhost",
  database: "todos",
  password: "password",
  port: 5432,
});
