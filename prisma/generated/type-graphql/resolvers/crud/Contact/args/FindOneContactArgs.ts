import * as TypeGraphQL from "type-graphql";
import { ContactWhereUniqueInput } from "../../../inputs/ContactWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindOneContactArgs {
  @TypeGraphQL.Field(_type => ContactWhereUniqueInput, { nullable: false })
  where!: ContactWhereUniqueInput;
}
