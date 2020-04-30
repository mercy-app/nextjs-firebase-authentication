import * as TypeGraphQL from "type-graphql";
import { ContactCreateWithoutCompanyInput } from "../inputs/ContactCreateWithoutCompanyInput";
import { ContactUpdateWithoutCompanyDataInput } from "../inputs/ContactUpdateWithoutCompanyDataInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class ContactUpsertWithoutCompanyInput {
  @TypeGraphQL.Field(_type => ContactUpdateWithoutCompanyDataInput, {
    nullable: false,
    description: undefined
  })
  update!: ContactUpdateWithoutCompanyDataInput;

  @TypeGraphQL.Field(_type => ContactCreateWithoutCompanyInput, {
    nullable: false,
    description: undefined
  })
  create!: ContactCreateWithoutCompanyInput;
}
