import * as TypeGraphQL from "type-graphql";
import { UserCreateWithoutCompaniesInput } from "../inputs/UserCreateWithoutCompaniesInput";
import { UserUpdateWithoutCompaniesDataInput } from "../inputs/UserUpdateWithoutCompaniesDataInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class UserUpsertWithoutCompaniesInput {
  @TypeGraphQL.Field(_type => UserUpdateWithoutCompaniesDataInput, {
    nullable: false,
    description: undefined
  })
  update!: UserUpdateWithoutCompaniesDataInput;

  @TypeGraphQL.Field(_type => UserCreateWithoutCompaniesInput, {
    nullable: false,
    description: undefined
  })
  create!: UserCreateWithoutCompaniesInput;
}
