import * as TypeGraphQL from "type-graphql";
import { ProductsOnCounpon } from "../../../models/ProductsOnCounpon";
import { AggregateProductsOnCounpon } from "../../outputs/AggregateProductsOnCounpon";

@TypeGraphQL.Resolver(_of => ProductsOnCounpon)
export class AggregateProductsOnCounponResolver {
  @TypeGraphQL.Query(_returns => AggregateProductsOnCounpon, {
    nullable: false,
    description: undefined
  })
  async aggregateProductsOnCounpon(): Promise<AggregateProductsOnCounpon> {
    return new AggregateProductsOnCounpon();
  }
}
