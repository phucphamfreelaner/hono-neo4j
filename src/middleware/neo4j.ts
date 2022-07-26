import { Context, Next } from "hono";
import { useNeo4j } from "@/hooks";
import { Session } from "neo4j-driver";

export const neo4j = (session: Session) => async (c: Context, next: Next) => {
  const neo4jClient = useNeo4j(session);
  c.set("neo4jClient", neo4jClient);
  await next();
};
