import * as TypeGraphQL from "type-graphql";
import { OrderItemOrderByInput } from "../../../inputs/OrderItemOrderByInput";
import { OrderItemWhereInput } from "../../../inputs/OrderItemWhereInput";
import { OrderItemWhereUniqueInput } from "../../../inputs/OrderItemWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class ProductOrdersArgs {
  @TypeGraphQL.Field(_type => OrderItemWhereInput, { nullable: true })
  where?: OrderItemWhereInput | null;

  @TypeGraphQL.Field(_type => OrderItemOrderByInput, { nullable: true })
  orderBy?: OrderItemOrderByInput | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, { nullable: true })
  skip?: number | null;

  @TypeGraphQL.Field(_type => OrderItemWhereUniqueInput, { nullable: true })
  after?: OrderItemWhereUniqueInput | null;

  @TypeGraphQL.Field(_type => OrderItemWhereUniqueInput, { nullable: true })
  before?: OrderItemWhereUniqueInput | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, { nullable: true })
  first?: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, { nullable: true })
  last?: number | null;
}
