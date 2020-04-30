import * as TypeGraphQL from "type-graphql";
import { CreateOneRoomArgs } from "./args/CreateOneRoomArgs";
import { DeleteManyRoomArgs } from "./args/DeleteManyRoomArgs";
import { DeleteOneRoomArgs } from "./args/DeleteOneRoomArgs";
import { FindManyRoomArgs } from "./args/FindManyRoomArgs";
import { FindOneRoomArgs } from "./args/FindOneRoomArgs";
import { UpdateManyRoomArgs } from "./args/UpdateManyRoomArgs";
import { UpdateOneRoomArgs } from "./args/UpdateOneRoomArgs";
import { UpsertOneRoomArgs } from "./args/UpsertOneRoomArgs";
import { Room } from "../../../models/Room";
import { AggregateRoom } from "../../outputs/AggregateRoom";
import { BatchPayload } from "../../outputs/BatchPayload";

@TypeGraphQL.Resolver(_of => Room)
export class RoomCrudResolver {
  @TypeGraphQL.Query(_returns => Room, {
    nullable: true,
    description: undefined
  })
  async room(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindOneRoomArgs): Promise<Room | null> {
    return ctx.prisma.room.findOne(args);
  }

  @TypeGraphQL.Query(_returns => [Room], {
    nullable: false,
    description: undefined
  })
  async rooms(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindManyRoomArgs): Promise<Room[]> {
    return ctx.prisma.room.findMany(args);
  }

  @TypeGraphQL.Mutation(_returns => Room, {
    nullable: false,
    description: undefined
  })
  async createOneRoom(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: CreateOneRoomArgs): Promise<Room> {
    return ctx.prisma.room.create(args);
  }

  @TypeGraphQL.Mutation(_returns => Room, {
    nullable: true,
    description: undefined
  })
  async deleteOneRoom(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteOneRoomArgs): Promise<Room | null> {
    return ctx.prisma.room.delete(args);
  }

  @TypeGraphQL.Mutation(_returns => Room, {
    nullable: true,
    description: undefined
  })
  async updateOneRoom(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateOneRoomArgs): Promise<Room | null> {
    return ctx.prisma.room.update(args);
  }

  @TypeGraphQL.Mutation(_returns => BatchPayload, {
    nullable: false,
    description: undefined
  })
  async deleteManyRoom(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteManyRoomArgs): Promise<BatchPayload> {
    return ctx.prisma.room.deleteMany(args);
  }

  @TypeGraphQL.Mutation(_returns => BatchPayload, {
    nullable: false,
    description: undefined
  })
  async updateManyRoom(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateManyRoomArgs): Promise<BatchPayload> {
    return ctx.prisma.room.updateMany(args);
  }

  @TypeGraphQL.Mutation(_returns => Room, {
    nullable: false,
    description: undefined
  })
  async upsertOneRoom(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpsertOneRoomArgs): Promise<Room> {
    return ctx.prisma.room.upsert(args);
  }

  @TypeGraphQL.Query(_returns => AggregateRoom, {
    nullable: false,
    description: undefined
  })
  async aggregateRoom(): Promise<AggregateRoom> {
    return new AggregateRoom();
  }
}
