import * as TypeGraphQL from "type-graphql";
import { UserCreateWithoutAddressesInput } from "../inputs/UserCreateWithoutAddressesInput";
import { UserUpdateWithoutAddressesDataInput } from "../inputs/UserUpdateWithoutAddressesDataInput";
import { UserUpsertWithoutAddressesInput } from "../inputs/UserUpsertWithoutAddressesInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class UserUpdateOneWithoutAddressesInput {
  @TypeGraphQL.Field(_type => UserCreateWithoutAddressesInput, {
    nullable: true,
    description: undefined
  })
  create?: UserCreateWithoutAddressesInput | null;

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

  @TypeGraphQL.Field(_type => UserUpdateWithoutAddressesDataInput, {
    nullable: true,
    description: undefined
  })
  update?: UserUpdateWithoutAddressesDataInput | null;

  @TypeGraphQL.Field(_type => UserUpsertWithoutAddressesInput, {
    nullable: true,
    description: undefined
  })
  upsert?: UserUpsertWithoutAddressesInput | null;
}
