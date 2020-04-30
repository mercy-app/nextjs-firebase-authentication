import * as TypeGraphQL from "type-graphql";
import { StaffCreateWithoutUserInput } from "../inputs/StaffCreateWithoutUserInput";
import { StaffWhereUniqueInput } from "../inputs/StaffWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class StaffCreateManyWithoutUserInput {
  @TypeGraphQL.Field(_type => [StaffCreateWithoutUserInput], {
    nullable: true,
    description: undefined
  })
  create?: StaffCreateWithoutUserInput[] | null;

  @TypeGraphQL.Field(_type => [StaffWhereUniqueInput], {
    nullable: true,
    description: undefined
  })
  connect?: StaffWhereUniqueInput[] | null;
}
