import * as TypeGraphQL from "type-graphql";
import { UserCreateWithoutStaffInput } from "../inputs/UserCreateWithoutStaffInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class UserCreateOneWithoutStaffInput {
  @TypeGraphQL.Field(_type => UserCreateWithoutStaffInput, {
    nullable: true,
    description: undefined
  })
  create?: UserCreateWithoutStaffInput | null;

  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: true,
    description: undefined
  })
  connect?: UserWhereUniqueInput | null;
}
