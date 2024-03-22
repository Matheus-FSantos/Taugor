import { router } from "./routes/routes";
import { app } from "./infra/config/app/app.config";

app.use(router);
