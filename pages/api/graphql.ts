import { ApolloServer, ApolloServerPlugin } from "@apollo/server";
import { startServerAndCreateNextHandler } from "@as-integrations/next";
import { neoSchema } from "../../apollo/schema";

import {
  ApolloServerPluginLandingPageLocalDefault,
  ApolloServerPluginLandingPageProductionDefault,
} from "@apollo/server/plugin/landingPage/default";

let plugins: Array<ApolloServerPlugin> = [];
plugins = [ApolloServerPluginLandingPageLocalDefault({ embed: true })];
// if (process.env.NODE_ENV === "production") {
//   plugins = [
//     ApolloServerPluginLandingPageProductionDefault({
//       embed: true,
//       graphRef: "tok@prod",
//     }),
//   ];
// } else {
//   plugins = [ApolloServerPluginLandingPageLocalDefault({ embed: true })];
// }

const server = async (): Promise<ApolloServer> => {
  const schema = await neoSchema.getSchema();
  return new ApolloServer({ schema, plugins, introspection: true });
};

export default startServerAndCreateNextHandler(await server());
