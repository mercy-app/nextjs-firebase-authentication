import * as TypeGraphQL from "type-graphql";
import { UpsertOneCardArgs } from "./args/UpsertOneCardArgs";
import { Card } from "../../../models/Card";

@TypeGraphQL.Resolver(_of => Card)
export class UpsertOneCardResolver {
  @TypeGraphQL.Mutation(_returns => Card, {
    nullable: false,
    description: undefined
  })
  async upsertOneCard(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpsertOneCardArgs): Promise<Card> {
    return ctx.prisma.card.upsert(args);
  }
}
