import * as TypeGraphQL from "type-graphql";
import { UserCreateWithoutCustomerInput } from "../inputs/UserCreateWithoutCustomerInput";
import { UserUpdateWithoutCustomerDataInput } from "../inputs/UserUpdateWithoutCustomerDataInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class UserUpsertWithoutCustomerInput {
  @TypeGraphQL.Field(_type => UserUpdateWithoutCustomerDataInput, {
    nullable: false,
    description: undefined
  })
  update!: UserUpdateWithoutCustomerDataInput;

  @TypeGraphQL.Field(_type => UserCreateWithoutCustomerInput, {
    nullable: false,
    description: undefined
  })
  create!: UserCreateWithoutCustomerInput;
}
