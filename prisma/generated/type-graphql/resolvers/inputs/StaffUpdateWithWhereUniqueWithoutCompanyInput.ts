import * as TypeGraphQL from "type-graphql";
import { StaffUpdateWithoutCompanyDataInput } from "../inputs/StaffUpdateWithoutCompanyDataInput";
import { StaffWhereUniqueInput } from "../inputs/StaffWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class StaffUpdateWithWhereUniqueWithoutCompanyInput {
  @TypeGraphQL.Field(_type => StaffWhereUniqueInput, {
    nullable: false,
    description: undefined
  })
  where!: StaffWhereUniqueInput;

  @TypeGraphQL.Field(_type => StaffUpdateWithoutCompanyDataInput, {
    nullable: false,
    description: undefined
  })
  data!: StaffUpdateWithoutCompanyDataInput;
}
