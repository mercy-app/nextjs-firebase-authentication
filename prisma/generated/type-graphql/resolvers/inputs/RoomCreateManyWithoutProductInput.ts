import * as TypeGraphQL from "type-graphql";
import { RoomCreateWithoutProductInput } from "../inputs/RoomCreateWithoutProductInput";
import { RoomWhereUniqueInput } from "../inputs/RoomWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class RoomCreateManyWithoutProductInput {
  @TypeGraphQL.Field(_type => [RoomCreateWithoutProductInput], {
    nullable: true,
    description: undefined
  })
  create?: RoomCreateWithoutProductInput[] | null;

  @TypeGraphQL.Field(_type => [RoomWhereUniqueInput], {
    nullable: true,
    description: undefined
  })
  connect?: RoomWhereUniqueInput[] | null;
}
