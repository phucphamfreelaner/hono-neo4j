import { Hono } from "hono";
import { neo4j } from "@/middleware";

const app = new Hono<Env>();

app.use("*", neo4j);
app.get("/", (c) => {
  return c.json(c);
});

export default app;
