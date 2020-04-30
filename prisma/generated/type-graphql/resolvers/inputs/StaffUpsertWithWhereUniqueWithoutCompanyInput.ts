import * as TypeGraphQL from "type-graphql";
import { StaffCreateWithoutCompanyInput } from "../inputs/StaffCreateWithoutCompanyInput";
import { StaffUpdateWithoutCompanyDataInput } from "../inputs/StaffUpdateWithoutCompanyDataInput";
import { StaffWhereUniqueInput } from "../inputs/StaffWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class StaffUpsertWithWhereUniqueWithoutCompanyInput {
  @TypeGraphQL.Field(_type => StaffWhereUniqueInput, {
    nullable: false,
    description: undefined
  })
  where!: StaffWhereUniqueInput;

  @TypeGraphQL.Field(_type => StaffUpdateWithoutCompanyDataInput, {
    nullable: false,
    description: undefined
  })
  update!: StaffUpdateWithoutCompanyDataInput;

  @TypeGraphQL.Field(_type => StaffCreateWithoutCompanyInput, {
    nullable: false,
    description: undefined
  })
  create!: StaffCreateWithoutCompanyInput;
}
