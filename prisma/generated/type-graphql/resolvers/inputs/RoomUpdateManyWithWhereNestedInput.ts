import * as TypeGraphQL from "type-graphql";
import { RoomScalarWhereInput } from "../inputs/RoomScalarWhereInput";
import { RoomUpdateManyDataInput } from "../inputs/RoomUpdateManyDataInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class RoomUpdateManyWithWhereNestedInput {
  @TypeGraphQL.Field(_type => RoomScalarWhereInput, {
    nullable: false,
    description: undefined
  })
  where!: RoomScalarWhereInput;

  @TypeGraphQL.Field(_type => RoomUpdateManyDataInput, {
    nullable: false,
    description: undefined
  })
  data!: RoomUpdateManyDataInput;
}
