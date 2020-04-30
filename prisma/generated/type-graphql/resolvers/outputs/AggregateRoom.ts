import * as TypeGraphQL from "type-graphql";
import { AggregateRoomCountArgs } from "./args/AggregateRoomCountArgs";

@TypeGraphQL.ObjectType({
  isAbstract: true,
  description: undefined,
})
export class AggregateRoom {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false,
    description: undefined
  })
  count(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: AggregateRoomCountArgs) {
    return ctx.prisma.room.count(args);
  }
}
