import * as TypeGraphQL from "type-graphql";
import { Booking } from "../../../models/Booking";
import { Room } from "../../../models/Room";

@TypeGraphQL.Resolver(_of => Booking)
export class BookingRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => Room, {
    nullable: false,
    description: undefined,
  })
  async room(@TypeGraphQL.Root() booking: Booking, @TypeGraphQL.Ctx() ctx: any): Promise<Room> {
    return ctx.prisma.booking.findOne({
      where: {
        id: booking.id,
      },
    }).room({});
  }
}
