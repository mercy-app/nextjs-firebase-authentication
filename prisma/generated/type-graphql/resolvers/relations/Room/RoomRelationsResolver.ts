import * as TypeGraphQL from "type-graphql";
import { Booking } from "../../../models/Booking";
import { Product } from "../../../models/Product";
import { Room } from "../../../models/Room";
import { RoomBookingsArgs } from "./args/RoomBookingsArgs";

@TypeGraphQL.Resolver(_of => Room)
export class RoomRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => Product, {
    nullable: false,
    description: undefined,
  })
  async product(@TypeGraphQL.Root() room: Room, @TypeGraphQL.Ctx() ctx: any): Promise<Product> {
    return ctx.prisma.room.findOne({
      where: {
        id: room.id,
      },
    }).product({});
  }

  @TypeGraphQL.FieldResolver(_type => [Booking], {
    nullable: true,
    description: undefined,
  })
  async bookings(@TypeGraphQL.Root() room: Room, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: RoomBookingsArgs): Promise<Booking[] | null> {
    return ctx.prisma.room.findOne({
      where: {
        id: room.id,
      },
    }).bookings(args);
  }
}
