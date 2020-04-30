import * as TypeGraphQL from "type-graphql";
import { RoomUpdateWithoutProductDataInput } from "../inputs/RoomUpdateWithoutProductDataInput";
import { RoomWhereUniqueInput } from "../inputs/RoomWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class RoomUpdateWithWhereUniqueWithoutProductInput {
  @TypeGraphQL.Field(_type => RoomWhereUniqueInput, {
    nullable: false,
    description: undefined
  })
  where!: RoomWhereUniqueInput;

  @TypeGraphQL.Field(_type => RoomUpdateWithoutProductDataInput, {
    nullable: false,
    description: undefined
  })
  data!: RoomUpdateWithoutProductDataInput;
}
