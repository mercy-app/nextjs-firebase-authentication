import * as TypeGraphQL from "type-graphql";
import { UserCreateOneWithoutCustomerInput } from "../inputs/UserCreateOneWithoutCustomerInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class CustomerCreateWithoutCompanyInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false,
    description: undefined
  })
  totalOrder!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false,
    description: undefined
  })
  totalOrderAmount!: number;

  @TypeGraphQL.Field(_type => UserCreateOneWithoutCustomerInput, {
    nullable: false,
    description: undefined
  })
  user!: UserCreateOneWithoutCustomerInput;
}
