import * as TypeGraphQL from "type-graphql";
import { AggregateCustomerCountArgs } from "./args/AggregateCustomerCountArgs";

@TypeGraphQL.ObjectType({
  isAbstract: true,
  description: undefined,
})
export class AggregateCustomer {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false,
    description: undefined
  })
  count(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: AggregateCustomerCountArgs) {
    return ctx.prisma.customer.count(args);
  }
}
