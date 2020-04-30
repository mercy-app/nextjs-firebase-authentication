import * as TypeGraphQL from "type-graphql";
import { Room } from "../models/Room";

@TypeGraphQL.ObjectType({
  isAbstract: true,
  description: undefined,
})
export class Booking {
  @TypeGraphQL.Field(_type => String, {
    nullable: false,
    description: undefined,
  })
  id!: string;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false,
    description: undefined,
  })
  bookingStart!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false,
    description: undefined,
  })
  bookingEnd!: Date;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false,
    description: undefined,
  })
  startHour!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false,
    description: undefined,
  })
  duration!: number;

  @TypeGraphQL.Field(_type => [String], {
    nullable: true,
    description: undefined,
  })
  recurring?: string[] | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: false,
    description: undefined,
  })
  roomId!: string;

  room?: Room;
}
