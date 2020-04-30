import * as TypeGraphQL from "type-graphql";
import { UserCreateWithoutCompaniesInput } from "../inputs/UserCreateWithoutCompaniesInput";
import { UserUpdateWithoutCompaniesDataInput } from "../inputs/UserUpdateWithoutCompaniesDataInput";
import { UserUpsertWithoutCompaniesInput } from "../inputs/UserUpsertWithoutCompaniesInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class UserUpdateOneWithoutCompaniesInput {
  @TypeGraphQL.Field(_type => UserCreateWithoutCompaniesInput, {
    nullable: true,
    description: undefined
  })
  create?: UserCreateWithoutCompaniesInput | null;

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

  @TypeGraphQL.Field(_type => UserUpdateWithoutCompaniesDataInput, {
    nullable: true,
    description: undefined
  })
  update?: UserUpdateWithoutCompaniesDataInput | null;

  @TypeGraphQL.Field(_type => UserUpsertWithoutCompaniesInput, {
    nullable: true,
    description: undefined
  })
  upsert?: UserUpsertWithoutCompaniesInput | null;
}
