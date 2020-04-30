import * as TypeGraphQL from "type-graphql";
import { TagCreateInput } from "../../../inputs/TagCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneTagArgs {
  @TypeGraphQL.Field(_type => TagCreateInput, { nullable: false })
  data!: TagCreateInput;
}
