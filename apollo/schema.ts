import { Neo4jGraphQL } from "@neo4j/graphql";
import getDriver from "../utils/neo4j";
//@ts-ignore
import typeDefs from "./schema.gql";

const driver = getDriver();

console.log("typeDefs ", typeDefs);
export const neoSchema = new Neo4jGraphQL({
  typeDefs,
  driver,
});
