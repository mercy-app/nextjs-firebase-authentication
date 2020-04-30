import * as TypeGraphQL from "type-graphql";
import { ContactWhereInput } from "../inputs/ContactWhereInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class ContactFilter {
  @TypeGraphQL.Field(_type => ContactWhereInput, {
    nullable: true,
    description: undefined
  })
  every?: ContactWhereInput | null;

  @TypeGraphQL.Field(_type => ContactWhereInput, {
    nullable: true,
    description: undefined
  })
  some?: ContactWhereInput | null;

  @TypeGraphQL.Field(_type => ContactWhereInput, {
    nullable: true,
    description: undefined
  })
  none?: ContactWhereInput | null;
}
