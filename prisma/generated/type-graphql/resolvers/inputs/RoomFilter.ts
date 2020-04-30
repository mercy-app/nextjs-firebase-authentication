import * as TypeGraphQL from "type-graphql";
import { RoomWhereInput } from "../inputs/RoomWhereInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class RoomFilter {
  @TypeGraphQL.Field(_type => RoomWhereInput, {
    nullable: true,
    description: undefined
  })
  every?: RoomWhereInput | null;

  @TypeGraphQL.Field(_type => RoomWhereInput, {
    nullable: true,
    description: undefined
  })
  some?: RoomWhereInput | null;

  @TypeGraphQL.Field(_type => RoomWhereInput, {
    nullable: true,
    description: undefined
  })
  none?: RoomWhereInput | null;
}
