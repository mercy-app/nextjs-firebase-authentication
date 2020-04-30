import * as TypeGraphQL from "type-graphql";
import { StaffScalarWhereInput } from "../inputs/StaffScalarWhereInput";
import { StaffUpdateManyDataInput } from "../inputs/StaffUpdateManyDataInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class StaffUpdateManyWithWhereNestedInput {
  @TypeGraphQL.Field(_type => StaffScalarWhereInput, {
    nullable: false,
    description: undefined
  })
  where!: StaffScalarWhereInput;

  @TypeGraphQL.Field(_type => StaffUpdateManyDataInput, {
    nullable: false,
    description: undefined
  })
  data!: StaffUpdateManyDataInput;
}
