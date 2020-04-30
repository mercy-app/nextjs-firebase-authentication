import * as TypeGraphQL from "type-graphql";
import { TagsOnProductsCreateInput } from "../../../inputs/TagsOnProductsCreateInput";
import { TagsOnProductsUpdateInput } from "../../../inputs/TagsOnProductsUpdateInput";
import { TagsOnProductsWhereUniqueInput } from "../../../inputs/TagsOnProductsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneTagsOnProductsArgs {
  @TypeGraphQL.Field(_type => TagsOnProductsWhereUniqueInput, { nullable: false })
  where!: TagsOnProductsWhereUniqueInput;

  @TypeGraphQL.Field(_type => TagsOnProductsCreateInput, { nullable: false })
  create!: TagsOnProductsCreateInput;

  @TypeGraphQL.Field(_type => TagsOnProductsUpdateInput, { nullable: false })
  update!: TagsOnProductsUpdateInput;
}
