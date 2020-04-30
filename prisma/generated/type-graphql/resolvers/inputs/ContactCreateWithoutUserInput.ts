import * as TypeGraphQL from "type-graphql";
import { CompanyCreateOneWithoutContactInput } from "../inputs/CompanyCreateOneWithoutContactInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class ContactCreateWithoutUserInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true,
    description: undefined
  })
  id?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: false,
    description: undefined
  })
  type!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false,
    description: undefined
  })
  number!: string;

  @TypeGraphQL.Field(_type => CompanyCreateOneWithoutContactInput, {
    nullable: true,
    description: undefined
  })
  company?: CompanyCreateOneWithoutContactInput | null;
}
