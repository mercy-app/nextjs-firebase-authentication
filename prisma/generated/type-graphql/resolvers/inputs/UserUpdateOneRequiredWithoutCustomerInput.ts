import * as TypeGraphQL from "type-graphql";
import { UserCreateWithoutCustomerInput } from "../inputs/UserCreateWithoutCustomerInput";
import { UserUpdateWithoutCustomerDataInput } from "../inputs/UserUpdateWithoutCustomerDataInput";
import { UserUpsertWithoutCustomerInput } from "../inputs/UserUpsertWithoutCustomerInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class UserUpdateOneRequiredWithoutCustomerInput {
  @TypeGraphQL.Field(_type => UserCreateWithoutCustomerInput, {
    nullable: true,
    description: undefined
  })
  create?: UserCreateWithoutCustomerInput | null;

  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: true,
    description: undefined
  })
  connect?: UserWhereUniqueInput | null;

  @TypeGraphQL.Field(_type => UserUpdateWithoutCustomerDataInput, {
    nullable: true,
    description: undefined
  })
  update?: UserUpdateWithoutCustomerDataInput | null;

  @TypeGraphQL.Field(_type => UserUpsertWithoutCustomerInput, {
    nullable: true,
    description: undefined
  })
  upsert?: UserUpsertWithoutCustomerInput | null;
}
