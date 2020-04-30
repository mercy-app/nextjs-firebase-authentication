import * as TypeGraphQL from "type-graphql";
import { CategoriesOnProducts } from "../../../models/CategoriesOnProducts";
import { AggregateCategoriesOnProducts } from "../../outputs/AggregateCategoriesOnProducts";

@TypeGraphQL.Resolver(_of => CategoriesOnProducts)
export class AggregateCategoriesOnProductsResolver {
  @TypeGraphQL.Query(_returns => AggregateCategoriesOnProducts, {
    nullable: false,
    description: undefined
  })
  async aggregateCategoriesOnProducts(): Promise<AggregateCategoriesOnProducts> {
    return new AggregateCategoriesOnProducts();
  }
}
