import * as TypeGraphQL from "type-graphql";
import { CompanyCreateOneWithoutCustomersInput } from "../inputs/CompanyCreateOneWithoutCustomersInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class CustomerCreateWithoutUserInput {
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

  @TypeGraphQL.Field(_type => CompanyCreateOneWithoutCustomersInput, {
    nullable: false,
    description: undefined
  })
  company!: CompanyCreateOneWithoutCustomersInput;
}
