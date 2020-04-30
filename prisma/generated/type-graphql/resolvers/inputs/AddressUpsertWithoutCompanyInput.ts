import * as TypeGraphQL from "type-graphql";
import { AddressCreateWithoutCompanyInput } from "../inputs/AddressCreateWithoutCompanyInput";
import { AddressUpdateWithoutCompanyDataInput } from "../inputs/AddressUpdateWithoutCompanyDataInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class AddressUpsertWithoutCompanyInput {
  @TypeGraphQL.Field(_type => AddressUpdateWithoutCompanyDataInput, {
    nullable: false,
    description: undefined
  })
  update!: AddressUpdateWithoutCompanyDataInput;

  @TypeGraphQL.Field(_type => AddressCreateWithoutCompanyInput, {
    nullable: false,
    description: undefined
  })
  create!: AddressCreateWithoutCompanyInput;
}
