import * as TypeGraphQL from "type-graphql";
import { AddressCreateOneWithoutCompanyInput } from "../inputs/AddressCreateOneWithoutCompanyInput";
import { ContactCreateOneWithoutCompanyInput } from "../inputs/ContactCreateOneWithoutCompanyInput";
import { CountryCreateOneWithoutCompanyInput } from "../inputs/CountryCreateOneWithoutCompanyInput";
import { CustomerCreateManyWithoutCompanyInput } from "../inputs/CustomerCreateManyWithoutCompanyInput";
import { OrderCreateManyWithoutCompanyInput } from "../inputs/OrderCreateManyWithoutCompanyInput";
import { PlatformCreateOneWithoutCompanyInput } from "../inputs/PlatformCreateOneWithoutCompanyInput";
import { StaffCreateManyWithoutCompanyInput } from "../inputs/StaffCreateManyWithoutCompanyInput";
import { UserCreateOneWithoutCompaniesInput } from "../inputs/UserCreateOneWithoutCompaniesInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class CompanyCreateWithoutProductsInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true,
    description: undefined
  })
  id?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: false,
    description: undefined
  })
  name!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false,
    description: undefined
  })
  description!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true,
    description: undefined
  })
  customerId?: string | null;

  @TypeGraphQL.Field(_type => AddressCreateOneWithoutCompanyInput, {
    nullable: false,
    description: undefined
  })
  address!: AddressCreateOneWithoutCompanyInput;

  @TypeGraphQL.Field(_type => ContactCreateOneWithoutCompanyInput, {
    nullable: false,
    description: undefined
  })
  contact!: ContactCreateOneWithoutCompanyInput;

  @TypeGraphQL.Field(_type => PlatformCreateOneWithoutCompanyInput, {
    nullable: false,
    description: undefined
  })
  platform!: PlatformCreateOneWithoutCompanyInput;

  @TypeGraphQL.Field(_type => UserCreateOneWithoutCompaniesInput, {
    nullable: true,
    description: undefined
  })
  owner?: UserCreateOneWithoutCompaniesInput | null;

  @TypeGraphQL.Field(_type => CountryCreateOneWithoutCompanyInput, {
    nullable: true,
    description: undefined
  })
  country?: CountryCreateOneWithoutCompanyInput | null;

  @TypeGraphQL.Field(_type => StaffCreateManyWithoutCompanyInput, {
    nullable: true,
    description: undefined
  })
  staffs?: StaffCreateManyWithoutCompanyInput | null;

  @TypeGraphQL.Field(_type => CustomerCreateManyWithoutCompanyInput, {
    nullable: true,
    description: undefined
  })
  customers?: CustomerCreateManyWithoutCompanyInput | null;

  @TypeGraphQL.Field(_type => OrderCreateManyWithoutCompanyInput, {
    nullable: true,
    description: undefined
  })
  order?: OrderCreateManyWithoutCompanyInput | null;
}
