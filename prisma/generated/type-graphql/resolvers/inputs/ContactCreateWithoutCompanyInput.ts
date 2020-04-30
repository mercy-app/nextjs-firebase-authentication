import * as TypeGraphQL from "type-graphql";
import { UserCreateOneWithoutContactsInput } from "../inputs/UserCreateOneWithoutContactsInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class ContactCreateWithoutCompanyInput {
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

  @TypeGraphQL.Field(_type => UserCreateOneWithoutContactsInput, {
    nullable: true,
    description: undefined
  })
  user?: UserCreateOneWithoutContactsInput | null;
}
