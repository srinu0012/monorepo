import { app } from "./app";
import config from "./config/env";
import { testConnection } from "./config/db";

app.listen(config.serverPort, config.serverHost, async () => {
  testConnection();
  console.log(`server connected at port ${config.serverPort}`);
});
