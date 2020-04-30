import * as TypeGraphQL from "type-graphql";
import { ContactUpdateInput } from "../../../inputs/ContactUpdateInput";
import { ContactWhereUniqueInput } from "../../../inputs/ContactWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneContactArgs {
  @TypeGraphQL.Field(_type => ContactUpdateInput, { nullable: false })
  data!: ContactUpdateInput;

  @TypeGraphQL.Field(_type => ContactWhereUniqueInput, { nullable: false })
  where!: ContactWhereUniqueInput;
}
