import pgPromise from "pg-promise";
import config from "./env";

const dbConfig = {
  host: config.db.host,
  port: config.db.port,
  database: config.db.name,
  user: config.db.user,
  password: config.db.password,
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 2000,
};

export const db = pgPromise()(dbConfig);

export const testConnection = async () => {
  for (let i = 1; i <= config.retries; i++) {
    try {
      await db.connect();
      console.log("Connected to PostgreSQL Database");
      return;
    } catch (error: any) {
      if (i == config.retries) {
        console.error("Database Connection failed", error.message);
        process.exit(1);
      }
    }
  }
};
