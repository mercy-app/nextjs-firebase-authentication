import * as TypeGraphQL from "type-graphql";
import { CompanyCreateWithoutCountryInput } from "../inputs/CompanyCreateWithoutCountryInput";
import { CompanyWhereUniqueInput } from "../inputs/CompanyWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class CompanyCreateManyWithoutCountryInput {
  @TypeGraphQL.Field(_type => [CompanyCreateWithoutCountryInput], {
    nullable: true,
    description: undefined
  })
  create?: CompanyCreateWithoutCountryInput[] | null;

  @TypeGraphQL.Field(_type => [CompanyWhereUniqueInput], {
    nullable: true,
    description: undefined
  })
  connect?: CompanyWhereUniqueInput[] | null;
}
