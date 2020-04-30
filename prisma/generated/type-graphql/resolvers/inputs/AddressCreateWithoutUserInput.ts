import * as TypeGraphQL from "type-graphql";
import { CompanyCreateOneWithoutAddressInput } from "../inputs/CompanyCreateOneWithoutAddressInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class AddressCreateWithoutUserInput {
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

  @TypeGraphQL.Field(_type => CompanyCreateOneWithoutAddressInput, {
    nullable: true,
    description: undefined
  })
  company?: CompanyCreateOneWithoutAddressInput | null;
}
