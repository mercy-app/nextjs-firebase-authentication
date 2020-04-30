import * as TypeGraphQL from "type-graphql";
import { AggregatePlatformCountArgs } from "./args/AggregatePlatformCountArgs";

@TypeGraphQL.ObjectType({
  isAbstract: true,
  description: undefined,
})
export class AggregatePlatform {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false,
    description: undefined
  })
  count(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: AggregatePlatformCountArgs) {
    return ctx.prisma.platform.count(args);
  }
}
