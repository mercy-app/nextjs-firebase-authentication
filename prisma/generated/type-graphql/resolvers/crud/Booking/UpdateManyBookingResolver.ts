import * as TypeGraphQL from "type-graphql";
import { UpdateManyBookingArgs } from "./args/UpdateManyBookingArgs";
import { Booking } from "../../../models/Booking";
import { BatchPayload } from "../../outputs/BatchPayload";

@TypeGraphQL.Resolver(_of => Booking)
export class UpdateManyBookingResolver {
  @TypeGraphQL.Mutation(_returns => BatchPayload, {
    nullable: false,
    description: undefined
  })
  async updateManyBooking(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateManyBookingArgs): Promise<BatchPayload> {
    return ctx.prisma.booking.updateMany(args);
  }
}
