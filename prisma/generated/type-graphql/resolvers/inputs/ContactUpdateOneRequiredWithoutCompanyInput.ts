import * as TypeGraphQL from "type-graphql";
import { ContactCreateWithoutCompanyInput } from "../inputs/ContactCreateWithoutCompanyInput";
import { ContactUpdateWithoutCompanyDataInput } from "../inputs/ContactUpdateWithoutCompanyDataInput";
import { ContactUpsertWithoutCompanyInput } from "../inputs/ContactUpsertWithoutCompanyInput";
import { ContactWhereUniqueInput } from "../inputs/ContactWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class ContactUpdateOneRequiredWithoutCompanyInput {
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

  @TypeGraphQL.Field(_type => ContactUpdateWithoutCompanyDataInput, {
    nullable: true,
    description: undefined
  })
  update?: ContactUpdateWithoutCompanyDataInput | null;

  @TypeGraphQL.Field(_type => ContactUpsertWithoutCompanyInput, {
    nullable: true,
    description: undefined
  })
  upsert?: ContactUpsertWithoutCompanyInput | null;
}
