import * as TypeGraphQL from "type-graphql";
import { CountryOrderByInput } from "../../inputs/CountryOrderByInput";
import { CountryWhereInput } from "../../inputs/CountryWhereInput";
import { CountryWhereUniqueInput } from "../../inputs/CountryWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateCountryCountArgs {
  @TypeGraphQL.Field(_type => CountryWhereInput, { nullable: true })
  where?: CountryWhereInput | null;

  @TypeGraphQL.Field(_type => CountryOrderByInput, { nullable: true })
  orderBy?: CountryOrderByInput | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, { nullable: true })
  skip?: number | null;

  @TypeGraphQL.Field(_type => CountryWhereUniqueInput, { nullable: true })
  after?: CountryWhereUniqueInput | null;

  @TypeGraphQL.Field(_type => CountryWhereUniqueInput, { nullable: true })
  before?: CountryWhereUniqueInput | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, { nullable: true })
  first?: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, { nullable: true })
  last?: number | null;
}
