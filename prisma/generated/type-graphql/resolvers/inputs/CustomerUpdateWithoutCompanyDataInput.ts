import * as TypeGraphQL from "type-graphql";
import { UserUpdateOneRequiredWithoutCustomerInput } from "../inputs/UserUpdateOneRequiredWithoutCustomerInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class CustomerUpdateWithoutCompanyDataInput {
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

  @TypeGraphQL.Field(_type => UserUpdateOneRequiredWithoutCustomerInput, {
    nullable: true,
    description: undefined
  })
  user?: UserUpdateOneRequiredWithoutCustomerInput | null;
}
