import * as TypeGraphQL from "type-graphql";
import { ContactWhereUniqueInput } from "../../../inputs/ContactWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteOneContactArgs {
  @TypeGraphQL.Field(_type => ContactWhereUniqueInput, { nullable: false })
  where!: ContactWhereUniqueInput;
}
