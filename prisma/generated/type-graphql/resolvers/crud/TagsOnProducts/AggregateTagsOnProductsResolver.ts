import * as TypeGraphQL from "type-graphql";
import { TagsOnProducts } from "../../../models/TagsOnProducts";
import { AggregateTagsOnProducts } from "../../outputs/AggregateTagsOnProducts";

@TypeGraphQL.Resolver(_of => TagsOnProducts)
export class AggregateTagsOnProductsResolver {
  @TypeGraphQL.Query(_returns => AggregateTagsOnProducts, {
    nullable: false,
    description: undefined
  })
  async aggregateTagsOnProducts(): Promise<AggregateTagsOnProducts> {
    return new AggregateTagsOnProducts();
  }
}
