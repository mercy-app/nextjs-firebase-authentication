import * as TypeGraphQL from "type-graphql";
import { CompanyCreateWithoutOwnerInput } from "../inputs/CompanyCreateWithoutOwnerInput";
import { CompanyWhereUniqueInput } from "../inputs/CompanyWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class CompanyCreateManyWithoutOwnerInput {
  @TypeGraphQL.Field(_type => [CompanyCreateWithoutOwnerInput], {
    nullable: true,
    description: undefined
  })
  create?: CompanyCreateWithoutOwnerInput[] | null;

  @TypeGraphQL.Field(_type => [CompanyWhereUniqueInput], {
    nullable: true,
    description: undefined
  })
  connect?: CompanyWhereUniqueInput[] | null;
}
