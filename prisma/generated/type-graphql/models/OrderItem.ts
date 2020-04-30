import * as TypeGraphQL from "type-graphql";
import { Order } from "../models/Order";
import { Product } from "../models/Product";

@TypeGraphQL.ObjectType({
  isAbstract: true,
  description: undefined,
})
export class OrderItem {
  product?: Product;

  @TypeGraphQL.Field(_type => String, {
    nullable: false,
    description: undefined,
  })
  productId!: string;

  order?: Order;

  @TypeGraphQL.Field(_type => String, {
    nullable: false,
    description: undefined,
  })
  orderId!: string;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false,
    description: undefined,
  })
  createdAt!: Date;
}
