import * as TypeGraphQL from "type-graphql";
import { CategoriesOnProductsOrderByInput } from "../../../inputs/CategoriesOnProductsOrderByInput";
import { CategoriesOnProductsWhereInput } from "../../../inputs/CategoriesOnProductsWhereInput";
import { CategoriesOnProductsWhereUniqueInput } from "../../../inputs/CategoriesOnProductsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindManyCategoriesOnProductsArgs {
  @TypeGraphQL.Field(_type => CategoriesOnProductsWhereInput, { nullable: true })
  where?: CategoriesOnProductsWhereInput | null;

  @TypeGraphQL.Field(_type => CategoriesOnProductsOrderByInput, { nullable: true })
  orderBy?: CategoriesOnProductsOrderByInput | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, { nullable: true })
  skip?: number | null;

  @TypeGraphQL.Field(_type => CategoriesOnProductsWhereUniqueInput, { nullable: true })
  after?: CategoriesOnProductsWhereUniqueInput | null;

  @TypeGraphQL.Field(_type => CategoriesOnProductsWhereUniqueInput, { nullable: true })
  before?: CategoriesOnProductsWhereUniqueInput | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, { nullable: true })
  first?: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, { nullable: true })
  last?: number | null;
}
