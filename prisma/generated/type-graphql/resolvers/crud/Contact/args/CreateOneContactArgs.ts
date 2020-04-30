import * as TypeGraphQL from "type-graphql";
import { ContactCreateInput } from "../../../inputs/ContactCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneContactArgs {
  @TypeGraphQL.Field(_type => ContactCreateInput, { nullable: false })
  data!: ContactCreateInput;
}
