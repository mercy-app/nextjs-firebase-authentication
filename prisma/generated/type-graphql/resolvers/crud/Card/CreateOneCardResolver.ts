import * as TypeGraphQL from "type-graphql";
import { CreateOneCardArgs } from "./args/CreateOneCardArgs";
import { Card } from "../../../models/Card";

@TypeGraphQL.Resolver(_of => Card)
export class CreateOneCardResolver {
  @TypeGraphQL.Mutation(_returns => Card, {
    nullable: false,
    description: undefined
  })
  async createOneCard(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: CreateOneCardArgs): Promise<Card> {
    return ctx.prisma.card.create(args);
  }
}
