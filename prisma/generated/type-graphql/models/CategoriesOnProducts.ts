import * as TypeGraphQL from "type-graphql";
import { Category } from "../models/Category";
import { Product } from "../models/Product";

@TypeGraphQL.ObjectType({
  isAbstract: true,
  description: undefined,
})
export class CategoriesOnProducts {
  product?: Product;

  @TypeGraphQL.Field(_type => String, {
    nullable: false,
    description: undefined,
  })
  productId!: string;

  category?: Category;

  @TypeGraphQL.Field(_type => String, {
    nullable: false,
    description: undefined,
  })
  categoryId!: string;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false,
    description: undefined,
  })
  createdAt!: Date;
}
