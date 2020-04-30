import * as TypeGraphQL from "type-graphql";
import { CustomerUpdateWithoutCompanyDataInput } from "../inputs/CustomerUpdateWithoutCompanyDataInput";
import { CustomerWhereUniqueInput } from "../inputs/CustomerWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class CustomerUpdateWithWhereUniqueWithoutCompanyInput {
  @TypeGraphQL.Field(_type => CustomerWhereUniqueInput, {
    nullable: false,
    description: undefined
  })
  where!: CustomerWhereUniqueInput;

  @TypeGraphQL.Field(_type => CustomerUpdateWithoutCompanyDataInput, {
    nullable: false,
    description: undefined
  })
  data!: CustomerUpdateWithoutCompanyDataInput;
}
