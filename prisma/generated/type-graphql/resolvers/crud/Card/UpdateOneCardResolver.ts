import * as TypeGraphQL from "type-graphql";
import { UpdateOneCardArgs } from "./args/UpdateOneCardArgs";
import { Card } from "../../../models/Card";

@TypeGraphQL.Resolver(_of => Card)
export class UpdateOneCardResolver {
  @TypeGraphQL.Mutation(_returns => Card, {
    nullable: true,
    description: undefined
  })
  async updateOneCard(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateOneCardArgs): Promise<Card | null> {
    return ctx.prisma.card.update(args);
  }
}
