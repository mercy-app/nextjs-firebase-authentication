import * as TypeGraphQL from "type-graphql";
import { UserCreateOneWithoutAddressesInput } from "../inputs/UserCreateOneWithoutAddressesInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class AddressCreateWithoutCompanyInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true,
    description: undefined
  })
  id?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: false,
    description: undefined
  })
  type!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false,
    description: undefined
  })
  name!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true,
    description: undefined
  })
  json?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: false,
    description: undefined
  })
  info!: string;

  @TypeGraphQL.Field(_type => UserCreateOneWithoutAddressesInput, {
    nullable: true,
    description: undefined
  })
  user?: UserCreateOneWithoutAddressesInput | null;
}
