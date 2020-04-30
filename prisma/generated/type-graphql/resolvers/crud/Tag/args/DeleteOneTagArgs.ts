import * as TypeGraphQL from "type-graphql";
import { TagWhereUniqueInput } from "../../../inputs/TagWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteOneTagArgs {
  @TypeGraphQL.Field(_type => TagWhereUniqueInput, { nullable: false })
  where!: TagWhereUniqueInput;
}
