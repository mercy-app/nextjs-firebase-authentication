import * as TypeGraphQL from "type-graphql";
import { StaffUpdateWithoutUserDataInput } from "../inputs/StaffUpdateWithoutUserDataInput";
import { StaffWhereUniqueInput } from "../inputs/StaffWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class StaffUpdateWithWhereUniqueWithoutUserInput {
  @TypeGraphQL.Field(_type => StaffWhereUniqueInput, {
    nullable: false,
    description: undefined
  })
  where!: StaffWhereUniqueInput;

  @TypeGraphQL.Field(_type => StaffUpdateWithoutUserDataInput, {
    nullable: false,
    description: undefined
  })
  data!: StaffUpdateWithoutUserDataInput;
}
