import * as TypeGraphQL from "type-graphql";
import { Company } from "../../../models/Company";
import { Order } from "../../../models/Order";
import { OrderItem } from "../../../models/OrderItem";
import { OrderProductsArgs } from "./args/OrderProductsArgs";

@TypeGraphQL.Resolver(_of => Order)
export class OrderRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => [OrderItem], {
    nullable: true,
    description: undefined,
  })
  async products(@TypeGraphQL.Root() order: Order, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: OrderProductsArgs): Promise<OrderItem[] | null> {
    return ctx.prisma.order.findOne({
      where: {
        id: order.id,
      },
    }).products(args);
  }

  @TypeGraphQL.FieldResolver(_type => Company, {
    nullable: false,
    description: undefined,
  })
  async company(@TypeGraphQL.Root() order: Order, @TypeGraphQL.Ctx() ctx: any): Promise<Company> {
    return ctx.prisma.order.findOne({
      where: {
        id: order.id,
      },
    }).company({});
  }
}
