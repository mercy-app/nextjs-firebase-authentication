import * as TypeGraphQL from "type-graphql";
import { TagsOnProductsWhereUniqueInput } from "../../../inputs/TagsOnProductsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindOneTagsOnProductsArgs {
  @TypeGraphQL.Field(_type => TagsOnProductsWhereUniqueInput, { nullable: false })
  where!: TagsOnProductsWhereUniqueInput;
}
