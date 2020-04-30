import * as TypeGraphQL from "type-graphql";
import { CompanyUpdateOneWithoutContactInput } from "../inputs/CompanyUpdateOneWithoutContactInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class ContactUpdateWithoutUserDataInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true,
    description: undefined
  })
  id?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true,
    description: undefined
  })
  type?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true,
    description: undefined
  })
  number?: string | null;

  @TypeGraphQL.Field(_type => CompanyUpdateOneWithoutContactInput, {
    nullable: true,
    description: undefined
  })
  company?: CompanyUpdateOneWithoutContactInput | null;
}
