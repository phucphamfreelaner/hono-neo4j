import { neo4jConnection } from "@/configs";
import neo4jDriver from "neo4j-driver";

export const neo4jConnect = () => {
  const driver = neo4jDriver.driver(
    neo4jConnection.URI,
    neo4jDriver.auth.basic(neo4jConnection.USER, neo4jConnection.PASSWORD),
    {
      connectionTimeout: 6000,
      logging: {
        level: "debug",
        logger: (level, message) => console.log(level, "=>", message),
      },
    }
  );

  return driver.session({ database: "neo4j" });
};
