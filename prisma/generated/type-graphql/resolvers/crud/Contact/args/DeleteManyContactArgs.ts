import * as TypeGraphQL from "type-graphql";
import { ContactWhereInput } from "../../../inputs/ContactWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyContactArgs {
  @TypeGraphQL.Field(_type => ContactWhereInput, { nullable: true })
  where?: ContactWhereInput | null;
}
