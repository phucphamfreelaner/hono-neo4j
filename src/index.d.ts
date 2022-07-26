// import { Context } from "hono";

declare interface Env {
  URI: string;
  USER: string;
  PASSWORD: string;
}

interface INeo4jClient {
  readQuery: (query: string, params?: any) => Promise<[any, Error | null]>;
  writeResult: (query: string, params?: any) => Promise<[any, Error | null]>;
}
