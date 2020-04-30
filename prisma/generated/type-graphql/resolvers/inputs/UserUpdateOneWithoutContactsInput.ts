import * as TypeGraphQL from "type-graphql";
import { UserCreateWithoutContactsInput } from "../inputs/UserCreateWithoutContactsInput";
import { UserUpdateWithoutContactsDataInput } from "../inputs/UserUpdateWithoutContactsDataInput";
import { UserUpsertWithoutContactsInput } from "../inputs/UserUpsertWithoutContactsInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class UserUpdateOneWithoutContactsInput {
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

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true,
    description: undefined
  })
  disconnect?: boolean | null;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true,
    description: undefined
  })
  delete?: boolean | null;

  @TypeGraphQL.Field(_type => UserUpdateWithoutContactsDataInput, {
    nullable: true,
    description: undefined
  })
  update?: UserUpdateWithoutContactsDataInput | null;

  @TypeGraphQL.Field(_type => UserUpsertWithoutContactsInput, {
    nullable: true,
    description: undefined
  })
  upsert?: UserUpsertWithoutContactsInput | null;
}
