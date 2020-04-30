import * as TypeGraphQL from "type-graphql";
import { CategoriesOnProductsCreateInput } from "../../../inputs/CategoriesOnProductsCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneCategoriesOnProductsArgs {
  @TypeGraphQL.Field(_type => CategoriesOnProductsCreateInput, { nullable: false })
  data!: CategoriesOnProductsCreateInput;
}
