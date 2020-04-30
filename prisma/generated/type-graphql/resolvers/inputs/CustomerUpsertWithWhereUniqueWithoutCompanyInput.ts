import * as TypeGraphQL from "type-graphql";
import { CustomerCreateWithoutCompanyInput } from "../inputs/CustomerCreateWithoutCompanyInput";
import { CustomerUpdateWithoutCompanyDataInput } from "../inputs/CustomerUpdateWithoutCompanyDataInput";
import { CustomerWhereUniqueInput } from "../inputs/CustomerWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class CustomerUpsertWithWhereUniqueWithoutCompanyInput {
  @TypeGraphQL.Field(_type => CustomerWhereUniqueInput, {
    nullable: false,
    description: undefined
  })
  where!: CustomerWhereUniqueInput;

  @TypeGraphQL.Field(_type => CustomerUpdateWithoutCompanyDataInput, {
    nullable: false,
    description: undefined
  })
  update!: CustomerUpdateWithoutCompanyDataInput;

  @TypeGraphQL.Field(_type => CustomerCreateWithoutCompanyInput, {
    nullable: false,
    description: undefined
  })
  create!: CustomerCreateWithoutCompanyInput;
}
