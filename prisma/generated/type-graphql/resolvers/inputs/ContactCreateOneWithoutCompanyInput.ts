import * as TypeGraphQL from "type-graphql";
import { ContactCreateWithoutCompanyInput } from "../inputs/ContactCreateWithoutCompanyInput";
import { ContactWhereUniqueInput } from "../inputs/ContactWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class ContactCreateOneWithoutCompanyInput {
  @TypeGraphQL.Field(_type => ContactCreateWithoutCompanyInput, {
    nullable: true,
    description: undefined
  })
  create?: ContactCreateWithoutCompanyInput | null;

  @TypeGraphQL.Field(_type => ContactWhereUniqueInput, {
    nullable: true,
    description: undefined
  })
  connect?: ContactWhereUniqueInput | null;
}
