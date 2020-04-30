import * as TypeGraphQL from "type-graphql";
import { UserCreateWithoutCardsInput } from "../inputs/UserCreateWithoutCardsInput";
import { UserUpdateWithoutCardsDataInput } from "../inputs/UserUpdateWithoutCardsDataInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class UserUpsertWithoutCardsInput {
  @TypeGraphQL.Field(_type => UserUpdateWithoutCardsDataInput, {
    nullable: false,
    description: undefined
  })
  update!: UserUpdateWithoutCardsDataInput;

  @TypeGraphQL.Field(_type => UserCreateWithoutCardsInput, {
    nullable: false,
    description: undefined
  })
  create!: UserCreateWithoutCardsInput;
}
