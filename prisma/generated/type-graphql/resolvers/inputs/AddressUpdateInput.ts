import * as TypeGraphQL from "type-graphql";
import { CompanyUpdateOneWithoutAddressInput } from "../inputs/CompanyUpdateOneWithoutAddressInput";
import { UserUpdateOneWithoutAddressesInput } from "../inputs/UserUpdateOneWithoutAddressesInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class AddressUpdateInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true,
    description: undefined
  })
  id?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true,
    description: undefined
  })
  type?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true,
    description: undefined
  })
  name?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true,
    description: undefined
  })
  json?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true,
    description: undefined
  })
  info?: string | null;

  @TypeGraphQL.Field(_type => CompanyUpdateOneWithoutAddressInput, {
    nullable: true,
    description: undefined
  })
  company?: CompanyUpdateOneWithoutAddressInput | null;

  @TypeGraphQL.Field(_type => UserUpdateOneWithoutAddressesInput, {
    nullable: true,
    description: undefined
  })
  user?: UserUpdateOneWithoutAddressesInput | null;
}
