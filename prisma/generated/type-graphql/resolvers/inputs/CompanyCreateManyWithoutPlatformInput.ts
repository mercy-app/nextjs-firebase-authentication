import * as TypeGraphQL from "type-graphql";
import { CompanyCreateWithoutPlatformInput } from "../inputs/CompanyCreateWithoutPlatformInput";
import { CompanyWhereUniqueInput } from "../inputs/CompanyWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class CompanyCreateManyWithoutPlatformInput {
  @TypeGraphQL.Field(_type => [CompanyCreateWithoutPlatformInput], {
    nullable: true,
    description: undefined
  })
  create?: CompanyCreateWithoutPlatformInput[] | null;

  @TypeGraphQL.Field(_type => [CompanyWhereUniqueInput], {
    nullable: true,
    description: undefined
  })
  connect?: CompanyWhereUniqueInput[] | null;
}
