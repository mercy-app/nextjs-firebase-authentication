import * as TypeGraphQL from "type-graphql";
import { CustomerWhereUniqueInput } from "../../../inputs/CustomerWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindOneCustomerArgs {
  @TypeGraphQL.Field(_type => CustomerWhereUniqueInput, { nullable: false })
  where!: CustomerWhereUniqueInput;
}
