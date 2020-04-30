import * as TypeGraphQL from "type-graphql";
import { AddressCreateWithoutCompanyInput } from "../inputs/AddressCreateWithoutCompanyInput";
import { AddressWhereUniqueInput } from "../inputs/AddressWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class AddressCreateOneWithoutCompanyInput {
  @TypeGraphQL.Field(_type => AddressCreateWithoutCompanyInput, {
    nullable: true,
    description: undefined
  })
  create?: AddressCreateWithoutCompanyInput | null;

  @TypeGraphQL.Field(_type => AddressWhereUniqueInput, {
    nullable: true,
    description: undefined
  })
  connect?: AddressWhereUniqueInput | null;
}
