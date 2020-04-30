import * as TypeGraphQL from "type-graphql";
import { StaffCreateWithoutCompanyInput } from "../inputs/StaffCreateWithoutCompanyInput";
import { StaffWhereUniqueInput } from "../inputs/StaffWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class StaffCreateManyWithoutCompanyInput {
  @TypeGraphQL.Field(_type => [StaffCreateWithoutCompanyInput], {
    nullable: true,
    description: undefined
  })
  create?: StaffCreateWithoutCompanyInput[] | null;

  @TypeGraphQL.Field(_type => [StaffWhereUniqueInput], {
    nullable: true,
    description: undefined
  })
  connect?: StaffWhereUniqueInput[] | null;
}
