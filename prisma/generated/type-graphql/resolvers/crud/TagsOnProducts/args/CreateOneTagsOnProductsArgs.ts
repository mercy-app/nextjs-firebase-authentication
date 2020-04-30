import * as TypeGraphQL from "type-graphql";
import { TagsOnProductsCreateInput } from "../../../inputs/TagsOnProductsCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneTagsOnProductsArgs {
  @TypeGraphQL.Field(_type => TagsOnProductsCreateInput, { nullable: false })
  data!: TagsOnProductsCreateInput;
}
