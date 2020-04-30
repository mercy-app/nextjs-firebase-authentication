import * as TypeGraphQL from "type-graphql";
import { CompanyScalarWhereInput } from "../inputs/CompanyScalarWhereInput";
import { CompanyUpdateManyDataInput } from "../inputs/CompanyUpdateManyDataInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class CompanyUpdateManyWithWhereNestedInput {
  @TypeGraphQL.Field(_type => CompanyScalarWhereInput, {
    nullable: false,
    description: undefined
  })
  where!: CompanyScalarWhereInput;

  @TypeGraphQL.Field(_type => CompanyUpdateManyDataInput, {
    nullable: false,
    description: undefined
  })
  data!: CompanyUpdateManyDataInput;
}
