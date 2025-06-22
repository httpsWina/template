import { Hono } from "hono";
import { logger } from "hono/logger";
import exampleRoute from "./routes/exampleRoute";
import { drizzle } from "drizzle-orm/bun-sql";

const app = new Hono();
export const db = drizzle(process.env.DATABASE_URL!);
app.use('*', logger());

const apiRoutes = app.basePath('/api').route('/hello', exampleRoute);


export default app;
export type ApiRoutes = typeof apiRoutes;