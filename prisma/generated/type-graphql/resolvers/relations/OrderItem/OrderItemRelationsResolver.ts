import * as TypeGraphQL from "type-graphql";
import { Order } from "../../../models/Order";
import { OrderItem } from "../../../models/OrderItem";
import { Product } from "../../../models/Product";

@TypeGraphQL.Resolver(_of => OrderItem)
export class OrderItemRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => Product, {
    nullable: false,
    description: undefined,
  })
  async product(@TypeGraphQL.Root() orderItem: OrderItem, @TypeGraphQL.Ctx() ctx: any): Promise<Product> {
    return ctx.prisma.orderItem.findOne({
      where: {
        productId_orderId: {
          productId: orderItem.productId,
          orderId: orderItem.orderId,
        },
      },
    }).product({});
  }

  @TypeGraphQL.FieldResolver(_type => Order, {
    nullable: false,
    description: undefined,
  })
  async order(@TypeGraphQL.Root() orderItem: OrderItem, @TypeGraphQL.Ctx() ctx: any): Promise<Order> {
    return ctx.prisma.orderItem.findOne({
      where: {
        productId_orderId: {
          productId: orderItem.productId,
          orderId: orderItem.orderId,
        },
      },
    }).order({});
  }
}
