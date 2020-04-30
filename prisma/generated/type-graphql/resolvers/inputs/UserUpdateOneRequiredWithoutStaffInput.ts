import * as TypeGraphQL from "type-graphql";
import { UserCreateWithoutStaffInput } from "../inputs/UserCreateWithoutStaffInput";
import { UserUpdateWithoutStaffDataInput } from "../inputs/UserUpdateWithoutStaffDataInput";
import { UserUpsertWithoutStaffInput } from "../inputs/UserUpsertWithoutStaffInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class UserUpdateOneRequiredWithoutStaffInput {
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

  @TypeGraphQL.Field(_type => UserUpdateWithoutStaffDataInput, {
    nullable: true,
    description: undefined
  })
  update?: UserUpdateWithoutStaffDataInput | null;

  @TypeGraphQL.Field(_type => UserUpsertWithoutStaffInput, {
    nullable: true,
    description: undefined
  })
  upsert?: UserUpsertWithoutStaffInput | null;
}
