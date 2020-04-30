import * as TypeGraphQL from "type-graphql";
import { UserCreateWithoutCardsInput } from "../inputs/UserCreateWithoutCardsInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class UserCreateOneWithoutCardsInput {
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
}
