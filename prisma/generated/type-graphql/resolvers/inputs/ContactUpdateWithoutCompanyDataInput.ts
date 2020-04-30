import * as TypeGraphQL from "type-graphql";
import { UserUpdateOneWithoutContactsInput } from "../inputs/UserUpdateOneWithoutContactsInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class ContactUpdateWithoutCompanyDataInput {
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

  @TypeGraphQL.Field(_type => UserUpdateOneWithoutContactsInput, {
    nullable: true,
    description: undefined
  })
  user?: UserUpdateOneWithoutContactsInput | null;
}
