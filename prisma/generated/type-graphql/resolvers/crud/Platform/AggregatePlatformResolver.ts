import * as TypeGraphQL from "type-graphql";
import { Platform } from "../../../models/Platform";
import { AggregatePlatform } from "../../outputs/AggregatePlatform";

@TypeGraphQL.Resolver(_of => Platform)
export class AggregatePlatformResolver {
  @TypeGraphQL.Query(_returns => AggregatePlatform, {
    nullable: false,
    description: undefined
  })
  async aggregatePlatform(): Promise<AggregatePlatform> {
    return new AggregatePlatform();
  }
}
