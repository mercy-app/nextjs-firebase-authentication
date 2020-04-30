import * as TypeGraphQL from "type-graphql";
import { CompanyUpdateOneWithoutContactInput } from "../inputs/CompanyUpdateOneWithoutContactInput";
import { UserUpdateOneWithoutContactsInput } from "../inputs/UserUpdateOneWithoutContactsInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class ContactUpdateInput {
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

  @TypeGraphQL.Field(_type => UserUpdateOneWithoutContactsInput, {
    nullable: true,
    description: undefined
  })
  user?: UserUpdateOneWithoutContactsInput | null;
}
