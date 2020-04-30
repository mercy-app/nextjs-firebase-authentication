import * as TypeGraphQL from "type-graphql";
import { CustomerOrderByInput } from "../../../inputs/CustomerOrderByInput";
import { CustomerWhereInput } from "../../../inputs/CustomerWhereInput";
import { CustomerWhereUniqueInput } from "../../../inputs/CustomerWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindManyCustomerArgs {
  @TypeGraphQL.Field(_type => CustomerWhereInput, { nullable: true })
  where?: CustomerWhereInput | null;

  @TypeGraphQL.Field(_type => CustomerOrderByInput, { nullable: true })
  orderBy?: CustomerOrderByInput | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, { nullable: true })
  skip?: number | null;

  @TypeGraphQL.Field(_type => CustomerWhereUniqueInput, { nullable: true })
  after?: CustomerWhereUniqueInput | null;

  @TypeGraphQL.Field(_type => CustomerWhereUniqueInput, { nullable: true })
  before?: CustomerWhereUniqueInput | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, { nullable: true })
  first?: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, { nullable: true })
  last?: number | null;
}
