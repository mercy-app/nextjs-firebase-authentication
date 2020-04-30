import * as TypeGraphQL from "type-graphql";
import { DeleteOneCardArgs } from "./args/DeleteOneCardArgs";
import { Card } from "../../../models/Card";

@TypeGraphQL.Resolver(_of => Card)
export class DeleteOneCardResolver {
  @TypeGraphQL.Mutation(_returns => Card, {
    nullable: true,
    description: undefined
  })
  async deleteOneCard(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteOneCardArgs): Promise<Card | null> {
    return ctx.prisma.card.delete(args);
  }
}
