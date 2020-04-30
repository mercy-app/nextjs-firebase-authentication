import * as TypeGraphQL from "type-graphql";
import { OrderWhereUniqueInput } from "../../../inputs/OrderWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteOneOrderArgs {
  @TypeGraphQL.Field(_type => OrderWhereUniqueInput, { nullable: false })
  where!: OrderWhereUniqueInput;
}
