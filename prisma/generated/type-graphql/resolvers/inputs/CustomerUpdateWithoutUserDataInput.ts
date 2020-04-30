import * as TypeGraphQL from "type-graphql";
import { CompanyUpdateOneRequiredWithoutCustomersInput } from "../inputs/CompanyUpdateOneRequiredWithoutCustomersInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class CustomerUpdateWithoutUserDataInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true,
    description: undefined
  })
  totalOrder?: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true,
    description: undefined
  })
  totalOrderAmount?: number | null;

  @TypeGraphQL.Field(_type => CompanyUpdateOneRequiredWithoutCustomersInput, {
    nullable: true,
    description: undefined
  })
  company?: CompanyUpdateOneRequiredWithoutCustomersInput | null;
}
