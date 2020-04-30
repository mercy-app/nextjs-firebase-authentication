import * as TypeGraphQL from "type-graphql";
import { TagsOnProductsUpdateInput } from "../../../inputs/TagsOnProductsUpdateInput";
import { TagsOnProductsWhereUniqueInput } from "../../../inputs/TagsOnProductsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneTagsOnProductsArgs {
  @TypeGraphQL.Field(_type => TagsOnProductsUpdateInput, { nullable: false })
  data!: TagsOnProductsUpdateInput;

  @TypeGraphQL.Field(_type => TagsOnProductsWhereUniqueInput, { nullable: false })
  where!: TagsOnProductsWhereUniqueInput;
}
