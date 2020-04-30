import * as TypeGraphQL from "type-graphql";
import { CardOrderByInput } from "../../inputs/CardOrderByInput";
import { CardWhereInput } from "../../inputs/CardWhereInput";
import { CardWhereUniqueInput } from "../../inputs/CardWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateCardCountArgs {
  @TypeGraphQL.Field(_type => CardWhereInput, { nullable: true })
  where?: CardWhereInput | null;

  @TypeGraphQL.Field(_type => CardOrderByInput, { nullable: true })
  orderBy?: CardOrderByInput | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, { nullable: true })
  skip?: number | null;

  @TypeGraphQL.Field(_type => CardWhereUniqueInput, { nullable: true })
  after?: CardWhereUniqueInput | null;

  @TypeGraphQL.Field(_type => CardWhereUniqueInput, { nullable: true })
  before?: CardWhereUniqueInput | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, { nullable: true })
  first?: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, { nullable: true })
  last?: number | null;
}
