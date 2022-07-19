import { Context, Next } from "hono";
import { useNeo4j } from "@/hooks";

export const neo4j = async (c: Context, next: Next) => {
  const neo4jClient = useNeo4j({
    uri: c.env.URI,
    user: c.env.USER,
    password: c.env.PASSWORD,
  });
  (c as any).neo4jClient = neo4jClient;
  await next();
};
