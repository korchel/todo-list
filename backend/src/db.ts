import pg from "pg";

export const db = new pg.Pool({
  user: "postgres",
  host: "db",
  database: "postgres",
  password: "password",
  port: 5432,
});

const createTable = async () => {
  await db.query(`CREATE TABLE IF NOT EXISTS todos
  (id serial PRIMARY KEY,
  task VARCHAR (255) UNIQUE NOT NULL,
  done BOOLEAN NOT NULL);`);
};

db.connect();

createTable();
