import * as TypeGraphQL from "type-graphql";
import { TagsOnProductsOrderByInput } from "../../../inputs/TagsOnProductsOrderByInput";
import { TagsOnProductsWhereInput } from "../../../inputs/TagsOnProductsWhereInput";
import { TagsOnProductsWhereUniqueInput } from "../../../inputs/TagsOnProductsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class ProductTagsArgs {
  @TypeGraphQL.Field(_type => TagsOnProductsWhereInput, { nullable: true })
  where?: TagsOnProductsWhereInput | null;

  @TypeGraphQL.Field(_type => TagsOnProductsOrderByInput, { nullable: true })
  orderBy?: TagsOnProductsOrderByInput | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, { nullable: true })
  skip?: number | null;

  @TypeGraphQL.Field(_type => TagsOnProductsWhereUniqueInput, { nullable: true })
  after?: TagsOnProductsWhereUniqueInput | null;

  @TypeGraphQL.Field(_type => TagsOnProductsWhereUniqueInput, { nullable: true })
  before?: TagsOnProductsWhereUniqueInput | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, { nullable: true })
  first?: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, { nullable: true })
  last?: number | null;
}
