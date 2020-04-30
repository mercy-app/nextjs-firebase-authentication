import * as TypeGraphQL from "type-graphql";
import { OrderOrderByInput } from "../../inputs/OrderOrderByInput";
import { OrderWhereInput } from "../../inputs/OrderWhereInput";
import { OrderWhereUniqueInput } from "../../inputs/OrderWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateOrderCountArgs {
  @TypeGraphQL.Field(_type => OrderWhereInput, { nullable: true })
  where?: OrderWhereInput | null;

  @TypeGraphQL.Field(_type => OrderOrderByInput, { nullable: true })
  orderBy?: OrderOrderByInput | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, { nullable: true })
  skip?: number | null;

  @TypeGraphQL.Field(_type => OrderWhereUniqueInput, { nullable: true })
  after?: OrderWhereUniqueInput | null;

  @TypeGraphQL.Field(_type => OrderWhereUniqueInput, { nullable: true })
  before?: OrderWhereUniqueInput | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, { nullable: true })
  first?: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, { nullable: true })
  last?: number | null;
}
