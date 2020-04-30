import * as TypeGraphQL from "type-graphql";
import { CategoriesOnProductsCreateInput } from "../../../inputs/CategoriesOnProductsCreateInput";
import { CategoriesOnProductsUpdateInput } from "../../../inputs/CategoriesOnProductsUpdateInput";
import { CategoriesOnProductsWhereUniqueInput } from "../../../inputs/CategoriesOnProductsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneCategoriesOnProductsArgs {
  @TypeGraphQL.Field(_type => CategoriesOnProductsWhereUniqueInput, { nullable: false })
  where!: CategoriesOnProductsWhereUniqueInput;

  @TypeGraphQL.Field(_type => CategoriesOnProductsCreateInput, { nullable: false })
  create!: CategoriesOnProductsCreateInput;

  @TypeGraphQL.Field(_type => CategoriesOnProductsUpdateInput, { nullable: false })
  update!: CategoriesOnProductsUpdateInput;
}
