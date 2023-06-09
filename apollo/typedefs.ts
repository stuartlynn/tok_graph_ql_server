import { gql } from "@apollo/client";
import fs from "fs";
import schema from "./schema.gql";

export default gql(schema);
