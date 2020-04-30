import * as TypeGraphQL from "type-graphql";
import { Product } from "../../../models/Product";
import { AggregateProduct } from "../../outputs/AggregateProduct";

@TypeGraphQL.Resolver(_of => Product)
export class AggregateProductResolver {
  @TypeGraphQL.Query(_returns => AggregateProduct, {
    nullable: false,
    description: undefined
  })
  async aggregateProduct(): Promise<AggregateProduct> {
    return new AggregateProduct();
  }
}
