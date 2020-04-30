import * as TypeGraphQL from "type-graphql";
import { UserCreateWithoutContactsInput } from "../inputs/UserCreateWithoutContactsInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class UserCreateOneWithoutContactsInput {
  @TypeGraphQL.Field(_type => UserCreateWithoutContactsInput, {
    nullable: true,
    description: undefined
  })
  create?: UserCreateWithoutContactsInput | null;

  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: true,
    description: undefined
  })
  connect?: UserWhereUniqueInput | null;
}
