import * as TypeGraphQL from "type-graphql";
import { UserCreateWithoutCustomerInput } from "../inputs/UserCreateWithoutCustomerInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class UserCreateOneWithoutCustomerInput {
  @TypeGraphQL.Field(_type => UserCreateWithoutCustomerInput, {
    nullable: true,
    description: undefined
  })
  create?: UserCreateWithoutCustomerInput | null;

  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: true,
    description: undefined
  })
  connect?: UserWhereUniqueInput | null;
}
