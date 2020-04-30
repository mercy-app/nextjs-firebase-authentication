import * as TypeGraphQL from "type-graphql";
import { CreateOneBookingArgs } from "./args/CreateOneBookingArgs";
import { DeleteManyBookingArgs } from "./args/DeleteManyBookingArgs";
import { DeleteOneBookingArgs } from "./args/DeleteOneBookingArgs";
import { FindManyBookingArgs } from "./args/FindManyBookingArgs";
import { FindOneBookingArgs } from "./args/FindOneBookingArgs";
import { UpdateManyBookingArgs } from "./args/UpdateManyBookingArgs";
import { UpdateOneBookingArgs } from "./args/UpdateOneBookingArgs";
import { UpsertOneBookingArgs } from "./args/UpsertOneBookingArgs";
import { Booking } from "../../../models/Booking";
import { AggregateBooking } from "../../outputs/AggregateBooking";
import { BatchPayload } from "../../outputs/BatchPayload";

@TypeGraphQL.Resolver(_of => Booking)
export class BookingCrudResolver {
  @TypeGraphQL.Query(_returns => Booking, {
    nullable: true,
    description: undefined
  })
  async booking(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindOneBookingArgs): Promise<Booking | null> {
    return ctx.prisma.booking.findOne(args);
  }

  @TypeGraphQL.Query(_returns => [Booking], {
    nullable: false,
    description: undefined
  })
  async bookings(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindManyBookingArgs): Promise<Booking[]> {
    return ctx.prisma.booking.findMany(args);
  }

  @TypeGraphQL.Mutation(_returns => Booking, {
    nullable: false,
    description: undefined
  })
  async createOneBooking(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: CreateOneBookingArgs): Promise<Booking> {
    return ctx.prisma.booking.create(args);
  }

  @TypeGraphQL.Mutation(_returns => Booking, {
    nullable: true,
    description: undefined
  })
  async deleteOneBooking(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteOneBookingArgs): Promise<Booking | null> {
    return ctx.prisma.booking.delete(args);
  }

  @TypeGraphQL.Mutation(_returns => Booking, {
    nullable: true,
    description: undefined
  })
  async updateOneBooking(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateOneBookingArgs): Promise<Booking | null> {
    return ctx.prisma.booking.update(args);
  }

  @TypeGraphQL.Mutation(_returns => BatchPayload, {
    nullable: false,
    description: undefined
  })
  async deleteManyBooking(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteManyBookingArgs): Promise<BatchPayload> {
    return ctx.prisma.booking.deleteMany(args);
  }

  @TypeGraphQL.Mutation(_returns => BatchPayload, {
    nullable: false,
    description: undefined
  })
  async updateManyBooking(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateManyBookingArgs): Promise<BatchPayload> {
    return ctx.prisma.booking.updateMany(args);
  }

  @TypeGraphQL.Mutation(_returns => Booking, {
    nullable: false,
    description: undefined
  })
  async upsertOneBooking(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpsertOneBookingArgs): Promise<Booking> {
    return ctx.prisma.booking.upsert(args);
  }

  @TypeGraphQL.Query(_returns => AggregateBooking, {
    nullable: false,
    description: undefined
  })
  async aggregateBooking(): Promise<AggregateBooking> {
    return new AggregateBooking();
  }
}
