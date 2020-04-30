import * as TypeGraphQL from "type-graphql";
import { UserCreateWithoutCardsInput } from "../inputs/UserCreateWithoutCardsInput";
import { UserUpdateWithoutCardsDataInput } from "../inputs/UserUpdateWithoutCardsDataInput";
import { UserUpsertWithoutCardsInput } from "../inputs/UserUpsertWithoutCardsInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class UserUpdateOneRequiredWithoutCardsInput {
  @TypeGraphQL.Field(_type => UserCreateWithoutCardsInput, {
    nullable: true,
    description: undefined
  })
  create?: UserCreateWithoutCardsInput | null;

  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: true,
    description: undefined
  })
  connect?: UserWhereUniqueInput | null;

  @TypeGraphQL.Field(_type => UserUpdateWithoutCardsDataInput, {
    nullable: true,
    description: undefined
  })
  update?: UserUpdateWithoutCardsDataInput | null;

  @TypeGraphQL.Field(_type => UserUpsertWithoutCardsInput, {
    nullable: true,
    description: undefined
  })
  upsert?: UserUpsertWithoutCardsInput | null;
}
