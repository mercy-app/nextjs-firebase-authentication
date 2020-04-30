import * as TypeGraphQL from "type-graphql";
import { DeleteManyBookingArgs } from "./args/DeleteManyBookingArgs";
import { Booking } from "../../../models/Booking";
import { BatchPayload } from "../../outputs/BatchPayload";

@TypeGraphQL.Resolver(_of => Booking)
export class DeleteManyBookingResolver {
  @TypeGraphQL.Mutation(_returns => BatchPayload, {
    nullable: false,
    description: undefined
  })
  async deleteManyBooking(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteManyBookingArgs): Promise<BatchPayload> {
    return ctx.prisma.booking.deleteMany(args);
  }
}
