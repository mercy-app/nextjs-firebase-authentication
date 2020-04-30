import * as TypeGraphQL from "type-graphql";
import { OrderWhereInput } from "../../../inputs/OrderWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyOrderArgs {
  @TypeGraphQL.Field(_type => OrderWhereInput, { nullable: true })
  where?: OrderWhereInput | null;
}
