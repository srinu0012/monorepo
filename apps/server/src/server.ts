import { app } from "./app.js";
import config from "./config/env.js";
import { testConnection } from "./config/db.js";

app.listen(config.serverPort, config.serverHost, async () => {
  testConnection();
  console.log(`server connected at port ${config.serverPort}`);
});
