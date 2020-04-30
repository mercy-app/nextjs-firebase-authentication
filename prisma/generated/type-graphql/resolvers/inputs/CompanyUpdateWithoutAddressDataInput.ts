import * as TypeGraphQL from "type-graphql";
import { ContactUpdateOneRequiredWithoutCompanyInput } from "../inputs/ContactUpdateOneRequiredWithoutCompanyInput";
import { CountryUpdateOneWithoutCompanyInput } from "../inputs/CountryUpdateOneWithoutCompanyInput";
import { CustomerUpdateManyWithoutCompanyInput } from "../inputs/CustomerUpdateManyWithoutCompanyInput";
import { OrderUpdateManyWithoutCompanyInput } from "../inputs/OrderUpdateManyWithoutCompanyInput";
import { PlatformUpdateOneRequiredWithoutCompanyInput } from "../inputs/PlatformUpdateOneRequiredWithoutCompanyInput";
import { ProductUpdateManyWithoutCompanyInput } from "../inputs/ProductUpdateManyWithoutCompanyInput";
import { StaffUpdateManyWithoutCompanyInput } from "../inputs/StaffUpdateManyWithoutCompanyInput";
import { UserUpdateOneWithoutCompaniesInput } from "../inputs/UserUpdateOneWithoutCompaniesInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class CompanyUpdateWithoutAddressDataInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true,
    description: undefined
  })
  id?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true,
    description: undefined
  })
  name?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true,
    description: undefined
  })
  description?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true,
    description: undefined
  })
  customerId?: string | null;

  @TypeGraphQL.Field(_type => ContactUpdateOneRequiredWithoutCompanyInput, {
    nullable: true,
    description: undefined
  })
  contact?: ContactUpdateOneRequiredWithoutCompanyInput | null;

  @TypeGraphQL.Field(_type => PlatformUpdateOneRequiredWithoutCompanyInput, {
    nullable: true,
    description: undefined
  })
  platform?: PlatformUpdateOneRequiredWithoutCompanyInput | null;

  @TypeGraphQL.Field(_type => UserUpdateOneWithoutCompaniesInput, {
    nullable: true,
    description: undefined
  })
  owner?: UserUpdateOneWithoutCompaniesInput | null;

  @TypeGraphQL.Field(_type => CountryUpdateOneWithoutCompanyInput, {
    nullable: true,
    description: undefined
  })
  country?: CountryUpdateOneWithoutCompanyInput | null;

  @TypeGraphQL.Field(_type => ProductUpdateManyWithoutCompanyInput, {
    nullable: true,
    description: undefined
  })
  products?: ProductUpdateManyWithoutCompanyInput | null;

  @TypeGraphQL.Field(_type => StaffUpdateManyWithoutCompanyInput, {
    nullable: true,
    description: undefined
  })
  staffs?: StaffUpdateManyWithoutCompanyInput | null;

  @TypeGraphQL.Field(_type => CustomerUpdateManyWithoutCompanyInput, {
    nullable: true,
    description: undefined
  })
  customers?: CustomerUpdateManyWithoutCompanyInput | null;

  @TypeGraphQL.Field(_type => OrderUpdateManyWithoutCompanyInput, {
    nullable: true,
    description: undefined
  })
  order?: OrderUpdateManyWithoutCompanyInput | null;
}
