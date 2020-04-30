import * as TypeGraphQL from "type-graphql";
import { CustomerCreateWithoutCompanyInput } from "../inputs/CustomerCreateWithoutCompanyInput";
import { CustomerWhereUniqueInput } from "../inputs/CustomerWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class CustomerCreateManyWithoutCompanyInput {
  @TypeGraphQL.Field(_type => [CustomerCreateWithoutCompanyInput], {
    nullable: true,
    description: undefined
  })
  create?: CustomerCreateWithoutCompanyInput[] | null;

  @TypeGraphQL.Field(_type => [CustomerWhereUniqueInput], {
    nullable: true,
    description: undefined
  })
  connect?: CustomerWhereUniqueInput[] | null;
}
