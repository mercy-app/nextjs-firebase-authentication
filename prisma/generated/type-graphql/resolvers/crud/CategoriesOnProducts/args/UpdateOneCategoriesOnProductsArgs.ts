import * as TypeGraphQL from "type-graphql";
import { CategoriesOnProductsUpdateInput } from "../../../inputs/CategoriesOnProductsUpdateInput";
import { CategoriesOnProductsWhereUniqueInput } from "../../../inputs/CategoriesOnProductsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneCategoriesOnProductsArgs {
  @TypeGraphQL.Field(_type => CategoriesOnProductsUpdateInput, { nullable: false })
  data!: CategoriesOnProductsUpdateInput;

  @TypeGraphQL.Field(_type => CategoriesOnProductsWhereUniqueInput, { nullable: false })
  where!: CategoriesOnProductsWhereUniqueInput;
}
