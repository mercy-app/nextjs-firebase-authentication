import * as TypeGraphQL from "type-graphql";
import { CategoriesOnProductsWhereUniqueInput } from "../../../inputs/CategoriesOnProductsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindOneCategoriesOnProductsArgs {
  @TypeGraphQL.Field(_type => CategoriesOnProductsWhereUniqueInput, { nullable: false })
  where!: CategoriesOnProductsWhereUniqueInput;
}
