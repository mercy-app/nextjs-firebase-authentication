import * as TypeGraphQL from "type-graphql";
import { UserCreateWithoutStaffInput } from "../inputs/UserCreateWithoutStaffInput";
import { UserUpdateWithoutStaffDataInput } from "../inputs/UserUpdateWithoutStaffDataInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class UserUpsertWithoutStaffInput {
  @TypeGraphQL.Field(_type => UserUpdateWithoutStaffDataInput, {
    nullable: false,
    description: undefined
  })
  update!: UserUpdateWithoutStaffDataInput;

  @TypeGraphQL.Field(_type => UserCreateWithoutStaffInput, {
    nullable: false,
    description: undefined
  })
  create!: UserCreateWithoutStaffInput;
}
