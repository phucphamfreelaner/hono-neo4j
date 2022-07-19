import neo4j from "neo4j-driver";

export const useNeo4j = (options: {
  uri: string;
  user: string;
  password: string;
}) => {
  const driver = neo4j.driver(
    options.uri,
    neo4j.auth.basic(options.user, options.password)
  );
  const session = driver.session();

  const readQuery = async (
    query: string,
    params: any
  ): Promise<[any, Error | null]> => {
    try {
      const readResult = await session.readTransaction((tx) =>
        tx.run(query, params)
      );
      return [readResult, null];
    } catch (error) {
      return [null, error as Error];
    } finally {
      await session.close();
    }
  };
  const writeResult = async (
    query: string,
    params: any
  ): Promise<[any, Error | null]> => {
    try {
      const writeResult = await session.writeTransaction((tx) =>
        tx.run(query, params)
      );
      return [writeResult, null];
    } catch (error) {
      return [null, error as Error];
    } finally {
      await session.close();
    }
  };
  return { readQuery, writeResult };
};
