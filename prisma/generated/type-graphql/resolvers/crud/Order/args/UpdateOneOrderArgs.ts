import * as TypeGraphQL from "type-graphql";
import { OrderUpdateInput } from "../../../inputs/OrderUpdateInput";
import { OrderWhereUniqueInput } from "../../../inputs/OrderWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneOrderArgs {
  @TypeGraphQL.Field(_type => OrderUpdateInput, { nullable: false })
  data!: OrderUpdateInput;

  @TypeGraphQL.Field(_type => OrderWhereUniqueInput, { nullable: false })
  where!: OrderWhereUniqueInput;
}
