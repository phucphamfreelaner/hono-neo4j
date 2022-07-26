import { Hono } from "hono";
import { neo4j } from "@/middleware";
import { neo4jConnect } from "@/helper";
const app = new Hono<Env>();

const session = neo4jConnect();

app.use("*", neo4j(session));
app.get("/", async (c) => {
  const neo4jClient: INeo4jClient = c.get("neo4jClient");
  const [res, err] = await neo4jClient.readQuery(`
      MATCH (n) RETURN n
  `);
  console.log("🚀 ~ app.get ~ err", err);
  console.log("🚀 ~ app.get ~ res", res);
  return c.json(c);
});

export default app;
