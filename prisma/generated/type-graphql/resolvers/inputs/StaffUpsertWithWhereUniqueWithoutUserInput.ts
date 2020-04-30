import * as TypeGraphQL from "type-graphql";
import { StaffCreateWithoutUserInput } from "../inputs/StaffCreateWithoutUserInput";
import { StaffUpdateWithoutUserDataInput } from "../inputs/StaffUpdateWithoutUserDataInput";
import { StaffWhereUniqueInput } from "../inputs/StaffWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class StaffUpsertWithWhereUniqueWithoutUserInput {
  @TypeGraphQL.Field(_type => StaffWhereUniqueInput, {
    nullable: false,
    description: undefined
  })
  where!: StaffWhereUniqueInput;

  @TypeGraphQL.Field(_type => StaffUpdateWithoutUserDataInput, {
    nullable: false,
    description: undefined
  })
  update!: StaffUpdateWithoutUserDataInput;

  @TypeGraphQL.Field(_type => StaffCreateWithoutUserInput, {
    nullable: false,
    description: undefined
  })
  create!: StaffCreateWithoutUserInput;
}
