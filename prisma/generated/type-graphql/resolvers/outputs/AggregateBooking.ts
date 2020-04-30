import * as TypeGraphQL from "type-graphql";
import { AggregateBookingCountArgs } from "./args/AggregateBookingCountArgs";

@TypeGraphQL.ObjectType({
  isAbstract: true,
  description: undefined,
})
export class AggregateBooking {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false,
    description: undefined
  })
  count(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: AggregateBookingCountArgs) {
    return ctx.prisma.booking.count(args);
  }
}
