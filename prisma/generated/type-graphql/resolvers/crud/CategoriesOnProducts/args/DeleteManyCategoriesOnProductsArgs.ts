import * as TypeGraphQL from "type-graphql";
import { CategoriesOnProductsWhereInput } from "../../../inputs/CategoriesOnProductsWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyCategoriesOnProductsArgs {
  @TypeGraphQL.Field(_type => CategoriesOnProductsWhereInput, { nullable: true })
  where?: CategoriesOnProductsWhereInput | null;
}
