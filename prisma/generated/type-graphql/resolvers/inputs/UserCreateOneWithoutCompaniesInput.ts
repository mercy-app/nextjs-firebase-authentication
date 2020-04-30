import * as TypeGraphQL from "type-graphql";
import { UserCreateWithoutCompaniesInput } from "../inputs/UserCreateWithoutCompaniesInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class UserCreateOneWithoutCompaniesInput {
  @TypeGraphQL.Field(_type => UserCreateWithoutCompaniesInput, {
    nullable: true,
    description: undefined
  })
  create?: UserCreateWithoutCompaniesInput | null;

  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: true,
    description: undefined
  })
  connect?: UserWhereUniqueInput | null;
}
