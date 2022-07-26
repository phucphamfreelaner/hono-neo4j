import neo4j, { Session } from "neo4j-driver";

export const useNeo4j = (session: Session) => {
  const readQuery = async (
    query: string,
    params?: any
  ): Promise<[any, Error | null]> => {
    console.log("🚀 ~ query", query);
    try {
      const readResult = await session.readTransaction((tx) => tx.run(query));
      console.log("🚀 ~ readResult", readResult);

      return [readResult, null];
    } catch (error) {
      return [null, error as Error];
    }
  };
  const writeResult = async (
    query: string,
    params?: any
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
