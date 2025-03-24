import dotenv from "dotenv";
import path from "path";
import { getEnv } from "../utils/get-env.helper.js";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config({ path: path.resolve(__dirname, "../../.env") });

interface Config {
  nodeEnv: "development" | "production";
  serverHost: string;
  serverPort: number;
  db: {
    host: string;
    port: number;
    name: string;
    user: string;
    password: string;
  };
  jwtSecret: string;
  retries: number;
}

const config: Config = {
  nodeEnv: getEnv("NODE_ENV", "development") as "development" | "production",
  serverHost: getEnv("SERVER_HOSTNAME", "localhost"),
  serverPort: Number(getEnv("SERVER_PORT")),
  db: {
    host: getEnv("DB_HOST"),
    port: Number(getEnv("DB_PORT")),
    name: getEnv("DB_NAME"),
    user: getEnv("DB_USER"),
    password: getEnv("DB_PASSWORD"),
  },
  jwtSecret: getEnv("SECRET_KEY"),
  retries: Number(getEnv("RETRIES", "3")),
};

export default config;
