import * as TypeGraphQL from "type-graphql";
import { Product } from "../models/Product";
import { Tag } from "../models/Tag";

@TypeGraphQL.ObjectType({
  isAbstract: true,
  description: undefined,
})
export class TagsOnProducts {
  product?: Product;

  @TypeGraphQL.Field(_type => String, {
    nullable: false,
    description: undefined,
  })
  productId!: string;

  tag?: Tag;

  @TypeGraphQL.Field(_type => String, {
    nullable: false,
    description: undefined,
  })
  tagId!: string;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false,
    description: undefined,
  })
  createdAt!: Date;
}
