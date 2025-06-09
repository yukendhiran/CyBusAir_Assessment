import { app } from "./app";
import { logger } from "./utils/logger";

app.listen(3001, () => {
  logger.info(`Server running on port 3001`);
});
